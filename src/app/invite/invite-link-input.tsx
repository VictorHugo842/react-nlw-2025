// envia o function js para o navegador,
// pois padrão o next já envia como html pro navegador, não enviando js
'use client' // cuidado pra não enviar todo o js pro navegador, pois pode ser pesado, separar componentes

import { Copy, Link } from 'lucide-react'
import { IconButton } from '../../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../../components/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink) // qnd clicar no botão copiar, copia o link
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
