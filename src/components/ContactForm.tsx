import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import SectionTitle from './SectionTitle';

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
        setSubmissionStatus('idle');

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const success = Math.random() > 0.3;

            if (success) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section>
            <SectionTitle title="Contact Me" subtitle="Feel free to reach out for opportunities or collaborations." />
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="mt-1 bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="mt-1 bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Your Message..."
                            className="mt-1 bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
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
                                className="bg-green-500/20 text-green-400 p-3 rounded-md flex items-center gap-2"
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
                                className="bg-red-500/20 text-red-400 p-3 rounded-md flex items-center gap-2"
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
