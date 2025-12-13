import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS SDK
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import SectionTitle from './SectionTitle';

// 2. Define your EmailJS Credentials (Highly Recommend using environment variables!)
// For local testing, you can place these here temporarily, but for production, 
// move them to a .env file (e.g., REACT_APP_EMAILJS_SERVICE_ID=...)
const EMAILJS_SERVICE_ID = 'service_8ktoln8';
const EMAILJS_TEMPLATE_ID = 'template_07z26ds';
const EMAILJS_PUBLIC_KEY = 'EMoVSta3YmfIU2hQ1'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle'); // Reset status on new submission

    // 3. Prepare the template parameters (must match the template variables in EmailJS)
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        // Add other fields your template uses, e.g., to_email: 'chaitanyamaili@example.com'
    };

    try {
      // 4. Send the email using the EmailJS function
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle non-200 responses from EmailJS (e.g., invalid template)
        console.error('EmailJS Error Response:', response);
        setSubmissionStatus('error');
      }
    } catch (error) {
      // 5. Handle network errors or other exceptions
      console.error('Error sending email:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <SectionTitle title="Contact Me" subtitle="Feel free to reach out for opportunities or collaborations." />
      <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your Message..."
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          <AnimatePresence>
            {submissionStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-green-500/20 text-green-600 dark:text-green-400 p-3 rounded-md flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </motion.div>
            )}
            {submissionStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-red-500/20 text-red-600 dark:text-red-400 p-3 rounded-md flex items-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" />
                Error sending message. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
