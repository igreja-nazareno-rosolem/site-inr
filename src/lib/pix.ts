import { PIX } from "./dados-igreja";

/* ============================================================
   PIX — payload EMV "copia e cola" / QR Code estático
   Portado do protótipo aprovado (design-handoff js/app.js).
   ============================================================ */

function crc16(texto: string): string {
  let crc = 0xffff;
  for (let i = 0; i < texto.length; i++) {
    crc ^= texto.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function campo(id: string, valor: string): string {
  return id + String(valor.length).padStart(2, "0") + valor;
}

/** Payload EMV do PIX estático da igreja (chave CNPJ), com CRC16 no final. */
export function gerarPayloadPix(): string {
  const gui = campo("00", "br.gov.bcb.pix") + campo("01", PIX.chave);
  const parcial =
    campo("00", "01") +
    campo("26", gui) +
    campo("52", "0000") +
    campo("53", "986") +
    campo("58", "BR") +
    campo("59", "IGREJA DO NAZARENO") +
    campo("60", "HORTOLANDIA") +
    campo("62", campo("05", "***")) +
    "6304";
  return parcial + crc16(parcial);
}
