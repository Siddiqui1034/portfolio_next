"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Send,
} from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    designation: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Thank you! Your message has been dispatched.", {
          theme: "dark",
        });
        setFormData({
          fullname: "",
          email: "",
          company: "",
          designation: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to deliver mail.", { theme: "dark" });
      }
    } catch (err) {
      toast.error("Network error. Please try direct WhatsApp.", {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Title with glowing underline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's build something{" "}
            <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.55)]">
              amazing together
            </span>
          </h2>

          <div className="relative mt-5 mb-6 w-full max-w-xl h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 via-violet-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-transparent blur-[3px]" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-5xl leading-relaxed">
            Have a project in mind, a question, or just want to connect? Send a
            message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="mailto:siddiqui.techsunset@gmail.com"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0b071a]/90 border border-purple-500/25 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl border border-purple-500/30 bg-purple-950/40 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-purple-300 font-semibold text-sm sm:text-base truncate">
                    siddiqui.techsunset@gmail.com
                  </p>
                  <p className="text-[11px] text-gray-500">Reach out anytime</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-gray-500 group-hover:text-purple-400 ml-2 flex-shrink-0"
              />
            </a>

            <a
              href="https://wa.me/919455644790"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0b071a]/90 border border-purple-500/15 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl border border-purple-500/20 bg-purple-950/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">WhatsApp / Call</p>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    +91 9455644790
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Quick chats and calls
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-gray-500 group-hover:text-purple-400 ml-2 flex-shrink-0"
              />
            </a>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b071a]/90 border border-purple-500/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl border border-purple-500/20 bg-purple-950/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  New Delhi, India
                </p>
                <p className="text-[11px] text-gray-500">
                  Available for remote roles & relocation
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/917376147918"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl border border-purple-500/25 bg-purple-950/20 hover:bg-purple-900/30 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-2.5 text-purple-200 text-sm font-medium"
            >
              <MessageCircle size={18} className="text-purple-400" />
              <span>Prefer WhatsApp? Message me directly</span>
            </a>
          </div>

          {/* Right Glowing Form Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent shadow-[0_0_35px_rgba(168,85,247,0.25)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(192,132,252,1),0_0_30px_rgba(168,85,247,0.8)] z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-purple-600/15 blur-2xl rounded-3xl -z-10 pointer-events-none" />

              <div className="relative rounded-[23px] bg-[#090615]/95 p-6 sm:p-8 backdrop-blur-xl">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Send me a message
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    All fields are dispatched directly via SMTP.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-xs font-medium text-purple-300">
                        Your fullname
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullname}
                        onChange={(e) =>
                          setFormData({ ...formData, fullname: e.target.value })
                        }
                        placeholder="Your fullname"
                        className="w-full rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-xs font-medium text-purple-300">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        className="w-full rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-xs font-medium text-purple-300">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your company name"
                        className="w-full rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-xs font-medium text-purple-300">
                          Designation
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.designation}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              designation: e.target.value,
                            })
                          }
                          placeholder="Your job title"
                          className="w-full rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-xs font-medium text-purple-300">
                          Phone
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Your phone number"
                          className="w-full rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs font-medium text-purple-300">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-purple-500/20 bg-[#030109]/90 px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-400/40 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(147,51,234,0.55)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] active:scale-[0.98] disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
