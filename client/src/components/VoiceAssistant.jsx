import { useEffect, useState } from 'react'
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
      return
    }

    if (!isConnecting) {
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
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <div
          className={`h-2 w-2 rounded-full transition-colors ${
            isConnected
              ? 'animate-pulse bg-green-500'
              : isConnecting
                ? 'animate-pulse bg-yellow-400'
                : 'bg-[#b8c0c7]'
          }`}
        />
        <span className="text-xs text-[#5f6670]">
          {isConnected
            ? 'Listening...'
            : isConnecting
              ? 'Connecting...'
              : 'Press the microphone to start'}
        </span>
      </div>

      {messages.length > 0 && (
        <div className="max-h-40 w-full space-y-2 overflow-y-auto">
          {messages.slice(-4).map((message, index) => {
            if (
              message.type !== 'user_message' &&
              message.type !== 'assistant_message'
            ) {
              return null
            }

            return (
              <div
                key={index}
                className={`rounded-xl px-3 py-2 text-xs ${
                  message.type === 'user_message'
                    ? 'ml-4 bg-[#dce9f3] text-[#164d78]'
                    : 'mr-4 bg-[#f4f3ef] text-[#4d5560]'
                }`}
              >
                <span className="mb-0.5 block font-semibold">
                  {message.type === 'user_message' ? 'You' : 'Pratik AI'}
                </span>
                {message.message?.content}
              </div>
            )
          })}
        </div>
      )}

      <button
        type="button"
        onClick={handleMicClick}
        disabled={isConnecting}
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 ${
          isConnected
            ? 'bg-red-500 hover:bg-red-600'
            : isConnecting
              ? 'cursor-not-allowed bg-yellow-400 opacity-70'
              : 'bg-[#1769aa] hover:bg-[#0f5288]'
        }`}
        aria-label={isConnected ? 'Stop AI assistant' : 'Start AI assistant'}
      >
        {isConnected ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
      </button>
    </div>
  )
}

function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const openAssistant = () => setIsOpen(true)

    window.addEventListener('open-voice-assistant', openAssistant)

    return () => {
      window.removeEventListener('open-voice-assistant', openAssistant)
    }
  }, [])

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/hume/token`,
        )
        const data = await response.json()
        setAccessToken(data.accessToken)
      } catch (error) {
        console.error('Failed to fetch Hume token:', error)
      }
    }

    fetchToken()
  }, [])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#1f2937]/35 p-4 backdrop-blur-[2px] sm:items-center"
      role="presentation"
      onMouseDown={() => setIsOpen(false)}
    >
      <section
        className="w-full max-w-sm rounded-2xl border border-[#dedbd3] bg-[#fbfaf7] p-5 shadow-2xl sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="voice-assistant-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3
              id="voice-assistant-title"
              className="text-sm font-bold text-[#1f2937]"
            >
              Ask me about Pratik
            </h3>
            <p className="mt-1 text-xs text-[#8d9298]">
              AI assistant powered by Hume EVI
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-[#5f6670] transition-colors hover:bg-[#eeece6] hover:text-[#1f2937]"
            aria-label="Close AI assistant"
          >
            <IoClose size={20} />
          </button>
        </div>

        {accessToken ? (
          <VoiceProvider
            auth={{ type: 'accessToken', value: accessToken }}
            configId={import.meta.env.VITE_HUME_CONFIG_ID}
          >
            <VoiceControls accessToken={accessToken} />
          </VoiceProvider>
        ) : (
          <p className="py-4 text-center text-sm text-[#8d9298]">
            Connecting to AI...
          </p>
        )}
      </section>
    </div>
  )
}

export default VoiceAssistant