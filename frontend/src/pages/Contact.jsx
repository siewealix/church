import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { submitContact } from '../api/resources';

const schema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message requis')
});

const Contact = () => {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (values) => {
    try {
      await submitContact(values);
      setStatus('Message envoyé avec succès.');
      reset();
    } catch (error) {
      setStatus(\"Impossible d'envoyer le message.\");
    }
  };

  return (
    <Layout>
      <Meta title="TFMI - Contact" description="Contactez la communauté TFMI" />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="section-title">Contact</h1>
        <p className="mt-4 text-slate-300">Écrivez-nous pour toute demande ou prière.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm text-slate-400">Nom complet</span>
            <input className="input" {...register('name')} />
            {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
          </label>
          <label className="block">
            <span className="text-sm text-slate-400">Email</span>
            <input className="input" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
          </label>
          <label className="block">
            <span className="text-sm text-slate-400">Message</span>
            <textarea className="input min-h-[160px]" {...register('message')} />
            {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
          </label>
          <button type="submit" className="button-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>
          {status && <p className="text-sm text-secondary">{status}</p>}
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
