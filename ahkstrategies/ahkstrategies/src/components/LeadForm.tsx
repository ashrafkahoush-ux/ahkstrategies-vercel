"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function LeadForm() {
  const t = useTranslations('LeadForm');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setStatus('loading');
    try {
      const res = await fetch(`/${locale}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('success');
        event.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="lead-form">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            {t('fields.name')}
          </label>
          <input
            id="name"
            name="Name"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            {t('fields.email')}
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            {t('fields.phone')}
          </label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">
            {t('fields.company')}
          </label>
          <input
            id="company"
            name="Company"
            type="text"
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          {t('fields.message')}
        </label>
        <textarea
          id="message"
          name="Description"
          required
          rows={4}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition disabled:opacity-60"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? t('loading') : t('submit')}
      </button>
      {status === 'success' && (
        <p className="text-green-600 mt-2">{t('success')}</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">{t('error')}</p>
      )}
    </form>
  );
}