const Contact = () => {
    return (
    <div className="max-w-2xl mx-auto px-6 py-16 bg-white text-gray-800">
      {/* Título */}
      <h2 className="text-2xl font-light uppercase tracking-wide text-center mb-12">
        Contact Us
      </h2>

      <form className="space-y-8">
        {/* Nombre */}
        <div className="border-b border-gray-300 pb-2">
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-none focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>

        {/* Email */}
        <div className="border-b border-gray-300 pb-2">
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border-none focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>

        {/* Asunto */}
        <div className="border-b border-gray-300 pb-2">
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-none focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>

        {/* Mensaje */}
        <div className="border-b border-gray-300 pb-2">
          <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full border-none focus:outline-none placeholder-gray-400 text-sm resize-none"
          ></textarea>
        </div>

        {/* Botón */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-6 px-10 py-2 border border-black text-black uppercase tracking-wide text-xs hover:bg-black hover:text-white transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;