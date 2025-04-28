import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 How can GoGetWell AI help you today?' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'Thank you for your message! Our AI team will get back to you soon.' }
      ]);
    }, 800);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        aria-label="Open chat panel"
        onClick={() => setOpen(true)}
        style={{ display: open ? 'none' : 'block' }}
      >
        💬
      </button>
      {/* Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto mb-8 md:mb-0 md:mr-8 flex flex-col"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div className="font-bold text-blue-700 text-lg">GoGetWell AI Chat</div>
                <button
                  className="text-gray-400 hover:text-blue-700 text-2xl font-bold focus:outline-none"
                  aria-label="Close chat panel"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="flex-1 px-6 py-4 overflow-y-auto max-h-80 md:max-h-96" style={{ minHeight: 200 }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`mb-3 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-xl px-4 py-2 text-sm ${msg.from === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-green-100 text-green-900'}`}>{msg.text}</div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSend} className="flex items-center border-t px-4 py-3 gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Type your message..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  aria-label="Type your message"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full px-4 py-2 font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  disabled={!input.trim()}
                >
                  Send
                </button>
              </form>
              <div className="text-xs text-center text-gray-400 py-2">Powered by GoGetWell AI</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatPanel; 