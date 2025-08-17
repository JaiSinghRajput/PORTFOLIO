import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import type { ContactInfo } from "~/types";
import { contactInfoData } from "~/data/index";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactInfo: ContactInfo = contactInfoData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        toast.success('Message sent successfully! I\'ll get back to you soon.');

        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 section-theme-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            {contactInfo.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {contactInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold contact-title mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're a startup looking to build your first product or an
                established company wanting to modernize your technology stack, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.details.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-theme-primary/10 rounded-lg flex items-center justify-center">
                    {detail.key.includes("Email") && <Mail className="h-6 w-6 contact-icon" />}
                    {detail.key.includes("Call") && <Phone className="h-6 w-6 contact-icon" />}
                    {detail.key.includes("Location") && <MapPin className="h-6 w-6 contact-icon" />}
                    {detail.key.includes("Response") && <Clock className="h-6 w-6 contact-icon" />}
                  </div>
                  <div>
                    <h4 className="font-semibold contact-label">{detail.key}</h4>
                    {detail.key.includes("Email") ? (
                      <a
                        href={`mailto:${detail.value}`}
                        className="text-muted-foreground hover:text-theme-primary transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : detail.key.includes("Call") ? (
                      <a
                        href={`tel:${detail.value}`}
                        className="text-muted-foreground hover:text-theme-primary transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Links */}
            {contactInfo.profileLinks && contactInfo.profileLinks.length > 0 && (
              <div className="flex space-x-4">
                {contactInfo.profileLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-primary hover:text-theme-secondary transition-colors font-medium"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}

            {/* Features */}
            <div className="contact-card-theme rounded-2xl p-6">
              <h4 className="font-semibold contact-title mb-4">Why Work With Me?</h4>
              <div className="space-y-3">
                {[
                  'Fast and reliable communication',
                  'Modern, scalable solutions',
                  'Clean, maintainable code',
                  'Ongoing support and maintenance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-theme-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact-form-theme rounded-2xl p-8 border border-gray-700 dark:border-gray-600 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium p-2 text-gray-200">Name *</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className={cn(
                      "w-full text-center px-4 py-3 rounded-lg border border-gray-600 dark:border-gray-500 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
                      errors.name && "border-red-500"
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium p-2 text-gray-200">Email *</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-600 dark:border-gray-500 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
                      errors.email && "border-red-500"
                    )}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2 text-left">
                <label htmlFor="subject" className="text-sm font-medium p-2 text-gray-200">Subject *</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-600 dark:border-gray-500 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
                    errors.subject && "border-red-500"
                  )}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium p-2 text-gray-200">Message *</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-600 dark:border-gray-500 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full flex items-center justify-center space-x-2 px-6 py-4 font-medium rounded-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white",
                  isSubmitting || isSubmitted ? "opacity-70 cursor-not-allowed" : ""
                )}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}