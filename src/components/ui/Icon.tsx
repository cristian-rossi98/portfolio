import type { IconKey } from '../../types/content'
import {
  FaArrowUpRightFromSquare,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6'

type Props = {
  name: IconKey
  className?: string
}

export function Icon({ name, className }: Props) {
  const cls = ['shrink-0', className ?? ''].join(' ')
  switch (name) {
    case 'email':
      return <FaEnvelope className={cls} aria-hidden="true" />
    case 'whatsapp':
      return <FaWhatsapp className={cls} aria-hidden="true" />
    case 'github':
      return <FaGithub className={cls} aria-hidden="true" />
    case 'linkedin':
      return <FaLinkedinIn className={cls} aria-hidden="true" />
    case 'external':
      return <FaArrowUpRightFromSquare className={cls} aria-hidden="true" />
    case 'download':
      return <FaDownload className={cls} aria-hidden="true" />
    case 'globe':
      return <FaGlobe className={cls} aria-hidden="true" />
    default:
      return null
  }
}

