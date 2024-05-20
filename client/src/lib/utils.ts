import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imams = [
  { name: 'Dr Coulibaly Sékou - Hafs', value: 'dr_coulibaly_sekou_hafs' },
  { name: 'Dr Coulibaly Sékou - Warch', value: 'dr_coulibaly_sekou_warch' },
]
