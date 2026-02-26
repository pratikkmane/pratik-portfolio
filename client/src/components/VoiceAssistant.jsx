import { useState, useEffect } from 'react'
import { VoiceProvider, useVoice, VoiceReadyState } from '@humeai/voice-react'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const SYSTEM_PROMPT = `You are an AI assistant representing Pratik Mane's portfolio website. 
Pratik is a graduate student pursuing MS in Applied Data Science at Indiana University Indianapolis. 
He has a background in Computer Science and has worked as a Software Engineering Intern at XR4RAP LLC 
where he built VR simulations on Meta Quest, as a Software Developer at RBK Technologies where he 
built production websites using Next.js and React, and as a Full Stack Developer Intern at Maharashtra 
Knowledge Corporation where he built a Digital University platform. His skills include Python, 
JavaScript, React, Node.js, MongoDB, machine learning, and data visualization. 
Be friendly, concise, and professional. Answer questions about Pratik's background, experience, skills, and projects.`

function VoiceControls({ accessToken }) {
  const { connect, disconnect, readyState, messages } = useVoice()

  const isConnected = readyState === VoiceReadyState.OPEN
  const isConnecting = readyState === VoiceReadyState.CONNECTING

  const handleMicClick = () => {
    if (isConnected) {
      disconnect()
    } else if (!isConnecting) {
      void connect({
        auth: { type: 'accessToken', value: accessToken },
        sessionSettings: {
          type: 'session_settings',
          systemPrompt: SYSTEM_PROMPT,
        },
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">

      {/* Status Indicator */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full transition-colors ${
          isConnected ? 'bg-green-500 animate-pulse' :
          isConnecting ? 'bg-yellow-400 animate-pulse' :
          'bg-gray-300'
        }`} />
        <span className="text-xs text-gray-500">
          {isConnected ? 'Listening...' : isConnecting ? 'Connecting...' : 'Click mic to start'}
        </span>
      </div>

      {/* Message History */}
      {messages.length > 0 && (
        <div className="w-full max-h-40 overflow-y-auto space-y-2">
          {messages.slice(-4).map((msg, i) => {
            if (msg.type === 'user_message' || msg.type === 'assistant_message') {
              return (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-xl text-xs ${
                    msg.type === 'user_message'
                      ? 'bg-blue-50 text-blue-800 ml-4'
                      : 'bg-gray-50 text-gray-700 mr-4'
                  }`}
                >
                  <span className="font-semibold block mb-0.5">
                    {msg.type === 'user_message' ? 'You' : 'Pratik AI'}
                  </span>
                  {msg.message?.content}
                </div>
              )
            }
            return null
          })}
        </div>
      )}

      {/* Mic Button */}
      <button
        onClick={handleMicClick}
        disabled={isConnecting}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
          isConnected
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : isConnecting
            ? 'bg-yellow-400 text-white cursor-not-allowed opacity-70'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isConnected
          ? <FaMicrophoneSlash size={20} />
          : <FaMicrophone size={20} />
        }
      </button>

    </div>
  )
}

function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/hume/token')
        const data = await res.json()
        setAccessToken(data.accessToken)
      } catch (err) {
        console.error('Failed to fetch Hume token:', err)
      }
    }
    fetchToken()
  }, [])

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 z-50"
        aria-label="Talk to AI Assistant"
      >
        {isOpen ? <IoClose size={22} /> : <FaMicrophone size={18} />}
      </button>

      {/* Voice Panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 z-50">
          <div className="mb-4">
            <h3 className="font-bold text-gray-900 text-sm">Ask me about Pratik</h3>
            <p className="text-xs text-gray-400 mt-1">AI assistant powered by Hume EVI</p>
          </div>

          {accessToken ? (
            <VoiceProvider>
              <VoiceControls accessToken={accessToken} />
            </VoiceProvider>
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">Connecting to AI...</p>
          )}
        </div>
      )}
    </>
  )
}

export default VoiceAssistant