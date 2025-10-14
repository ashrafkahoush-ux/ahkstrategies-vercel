"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function PartnerForm() {
  const t = useTranslations('PartnerForm');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setStatus('loading');
    try {
      const res = await fetch(`/${locale}/api/partner`, {
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
    <form onSubmit={handleSubmit} className="space-y-4" id="partner-form">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="pname">
            {t('fields.name')}
          </label>
          <input
            id="pname"
            name="Name"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="pemail">
            {t('fields.email')}
          </label>
          <input
            id="pemail"
            name="Email"
            type="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="pcompany">
            {t('fields.company')}
          </label>
          <input
            id="pcompany"
            name="Company"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="ptype">
            {t('fields.type')}
          </label>
          <input
            id="ptype"
            name="Type"
            type="text"
            placeholder={t('fields.typePlaceholder')}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="pmessage">
          {t('fields.message')}
        </label>
        <textarea
          id="pmessage"
          name="Description"
          required
          rows={4}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition disabled:opacity-60"
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