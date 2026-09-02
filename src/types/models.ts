// Modelos de dados conforme especificação principal do projeto.
// Serão usados a partir da Etapa 3 (modelo de dados) em diante.

export type StatusMaterial =
  | "pendente"
  | "conferido"
  | "ja_no_local"
  | "nao_levar"
  | "problema";

export type StatusEquipe = "pendente" | "concluido" | "sem_materiais";

export interface Material {
  descricao: string;
  quantidade?: number;
  unidade?: string;
  potencia?: string;
  marca?: string;
  modelo?: string;
  status: StatusMaterial;
  observacao?: string;
}

export interface Obra {
  id: string;
  cliente: string;
  endereco?: string;
  cidade?: string;
  estado?: string;

  tipoServico?: string; // ex: "Instalação", "Visita Técnica"
  visitaTecnica?: boolean;
  kitNoLocal?: boolean;

  materiais: Material[];
  observacoes?: string;

  sequencia?: number;
}

export interface Equipe {
  id: string;
  equipe: string; // nome da equipe/pessoa(s)
  motorista?: string;
  veiculo?: string;
  transportePor?: string; // ex: "Nilson" quando outro motorista leva a carga

  folga?: boolean;

  obras: Obra[];
  status: StatusEquipe;

  responsavelConferencia?: string;
  assinaturaBase64?: string;
  dataConferencia?: string; // ISO string
}

export interface ProgramacaoDia {
  id: string;
  data: string; // ISO string (yyyy-mm-dd)
  equipes: Equipe[];
  criadoEm: string; // ISO string
}
