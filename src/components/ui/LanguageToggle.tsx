"use client"

import React from 'react'
import type { Lang } from '@/constants/deleteContent'

interface LanguageToggleProps {
  lang: Lang
  onChange: (lang: Lang) => void
  ariaLabel?: string
}

export default function LanguageToggle({ lang, onChange, ariaLabel = 'lang-toggle' }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm ${lang === 'id' ? 'font-semibold' : ''}`}>ID</span>

      <button
        role="switch"
        aria-checked={lang === 'en'}
        aria-label={ariaLabel}
        onClick={() => onChange(lang === 'en' ? 'id' : 'en')}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${lang === 'en' ? 'bg-green-600' : 'bg-red-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-blue`}
      >
        <span className={`transform h-5 w-5 rounded-full bg-white shadow transition ${lang === 'en' ? 'translate-x-5' : 'translate-x-1'}`} />
      </button>

      <span className={`text-sm ${lang === 'en' ? 'font-semibold' : ''}`}>EN</span>
    </div>
  )
}
