
function getSkill() {
  return {
    AdobeFireWorks: 'Adobe FireWorks',
    AltitudeScriptLanguage: 'Altitude Script Language (ASL)',
    AltitudeuAgentWindows: 'Altitude uAgent Windows',
    AzureDevOps: 'Azure DevOps',
    Bitbucket: 'Bitbucket',
    BootStrap: 'Bootstrap',
    CSS: 'CSS',
    EJS: 'EJS',
    ExpressJs: 'ExpressJs',
    Github: 'Github',
    GitLab: 'GitLab',
    HTML: 'HTML',
    HTMLEgineBlade: 'HTML Egine - Blade',
    JavaScript: 'JavaScript',
    JavaSE: 'Java SE',
    JiraSoftware: 'Jira Software',
    JQuery: 'JQuery',
    KnexJs: 'KnexJs',
    Laravel: 'Laravel',
    MicrosoftOfficeExcel: 'Microsoft Office Excel',
    MongoDB: 'MongoDB',
    MySQL: 'MySQL',
    NextJs: 'NextJs',
    NodeJs: 'NodeJs',
    PHP: 'PHP',
    PortalAtendimentoCliente: 'Portal de atendimento ao cliente',
    ReactJs: 'ReactJs',
    ReactNative: 'ReactNative',
    RxJs: 'RxJs',
    SQLServer: 'SQL Server',
    TaillwindCss: 'Taillwind Css',
    Vbox: 'Vbox (central telefónica virtual)',
    WindowsServer2012: 'Windows Server 2012',
    WindowsServer2019: 'Windows Server 2019',
  }
}

function getSkillList() {
  const skill = getSkill()
  return [
    {
      description:
        'Bom domínio de linguagens de programação, frameworks e template engines',
      items: [
        { text: skill.PHP, stars: 4 },
        { text: skill.JavaScript, stars: 3 },
        { text: skill.HTML, stars: 4 },
        { text: skill.CSS, stars: 3 },
        { text: skill.JavaSE, stars: 3 },
        { text: skill.Laravel, stars: 3 },
        { text: skill.ReactJs, stars: 3 },
        { text: skill.NodeJs, stars: 3 },
        { text: skill.NextJs, stars: 2 },
        { text: skill.ReactNative, stars: 1 },
        { text: skill.BootStrap, stars: 4 },
        { text: skill.TaillwindCss, stars: 4 },
        { text: skill.JQuery, stars: 3 },
        { text: skill.HTMLEgineBlade, stars: 3 },
        { text: skill.EJS, stars: 2 },
      ],
    },
    {
      description: 'Base de dados',
      items: [
        { text: skill.MySQL, stars: 3 },
        { text: skill['SQLServer'], stars: 3 },
        { text: skill.MongoDB, stars: 2 },
      ],
    },
  ]
}

/**
 * @typedef {{occupation: string, activity_section: string, description: string, techs: string[], start_year: number, start_month: number, end_year: number, end_month: number}} CompanyType
 */

/**
 * @typedef {{company: string, address: string, experiencies: CompanyType}} ExperienceType
 */

function getProfessionalInfos() {
  const skill = getSkill()
  return [
    {
      company: 'Zukk - Serviços em tecnologias',
      address: 'Condomínio Royal Park, São José de campos – SP, Brazil ',
      experiencies: [
        {
          occupation: 'Desenvolvedor Frontend',
          activity_section: 'Departamento de desenvolvimento de software',
          description: `
                      <ul class="company-reponsabilities">
                        <li>Desenvolvimento e manutenção de aplicações web.</li>
                        <li>Participar de reuniões de planejamento de projetos.</li>
                        <li>Definir metas e prazo de desenvolvimento.</li>
                        <li>Daily: Reuniões diárias de alinhamento com o cliente das tarefas em andamento</li>
                      </ul>
                    `,
          techs: [
            skill.JavaScript,
            skill.RxJs,
            skill.HTML,
            skill.CSS,
            skill.AzureDevOps,
            skill.Bitbucket,
          ],
          start_year: 2021,
          start_month: 12,
          end_year: 2022,
          end_month: 12,
        },
      ],
    },
    {
      company: 'Quality Contact Centers',
      address:
        'Via expressa/Rua K, Nº 8, Zona Verde - Benfica - Luanda, Angola',
      experiencies: [
        {
          occupation: 'Desenvolvedor Fullstack',
          activity_section: 'Departamento de Desenvolvimento de Softwares',
          description: `
                      <ul class="company-reponsabilities">
                        <li>
                          Desenvolvimento de softwares, intranets e portais de informações orientados ao atendimento
                        </li>
                        <li>
                          Instalação de Contact Center para clientes externos no ramo de banca, seguros e companhia aérea
                        </li>
                        <li>
                          Gestão do Contact Center interno e da principal plataforma de negócio (Altitude Software)
                        </li>
                        <li>
                          Criação de scripts e campanhas de suporte no atendimento ao cliente
                        </li>
                        <li>
                          Criação de scripts e campanhas de IVR
                        </li>
                        <li>
                          Criação de relatórios de actividades em função das campanhas desenvolvidas para o atendimento
                        </li>
                        <li>
                          Actualização da documentação dos softwares utilizados
                        </li>
                        <li>
                          Criação de reports operacionais em Excel e Suporte a área de Report & Data Analysis
                        </li>
                      </ul>
                        `,
          techs: [
            skill.PHP,
            skill.NodeJs,
            skill.ExpressJs,
            skill.ReactJs,
            skill.NextJs,
            skill.KnexJs,
            skill.HTML,
            skill.EJS,
            skill.Github,
            skill.GitLab,
            skill.JiraSoftware,
            skill.AltitudeScriptLanguage,
            skill.Vbox,
            skill.MySQL,
            skill.SQLServer,
            skill.MongoDB,
            skill.JQuery,
            skill.BootStrap,
            skill.TaillwindCss,
            skill.MicrosoftOfficeExcel,
            skill.WindowsServer2012,
            skill.WindowsServer2019,
          ],
          start_year: 2018,
          start_month: 4,
          end_year: 2021,
          end_month: 12,
        },
        {
          occupation: 'Assistente de Contact Center',
          activity_section: 'Atendimento ao cliente',
          description: `
                    <ul class="company-reponsabilities">
                        <li>
                          Prestar assistência aos clientes relacionados ao produtos e serviços
                        </li>
                        <li>
                          Registo de possíveis reclamações e solicitações de clientes e assegurar o tratamento das mesmas
                        </li>
                        <li>
                         Venda de produtos e serviços via contactos telefónicos por meio de campanhas atribuídas pelo supervisor
                        </li>
                      </ul>
                    `,

          techs: [skill.AltitudeuAgentWindows, skill.PortalAtendimentoCliente],
          start_year: 2017,
          start_month: 12,
          end_year: 2018,
          end_month: 4,
        },
      ],
    },
    {
      company: 'Ginásio Transformers',
      address: 'Talatona - Luanda, Angola',
      experiencies: [
        {
          occupation: 'Consultor de software e Marketing',
          activity_section: 'TI',
          description: `
                      <ul class="company-reponsabilities">
                        <li>Desenvolvimento e manutenção do software de gestão do ginásio</li>
                        <li>Criação de ficha, cartão e relatório dos atletas</li>
                        <li>Criar/editar flyers publicitários e panfletos</li>
                        <li>Criação de ficha, cartão e relatório dos atletas</li>
                        <li>Criar estratégias para desenvolvimento do negócio e gestão das redes sociais</li>
                      </ul>
                   `,
          techs: [skill.JavaSE, skill.MySQL, skill.AdobeFireWorks],
          start_year: 2017,
          start_month: 3,
          end_year: 2017,
          end_month: 12,
        },
      ],
    },
    {
      company: 'Ucall',
      address: 'Talatona – Condomínio Alfa – Luanda, Angola',
      experiencies: [
        {
          occupation: 'Assistente de Contact Center',
          activity_section: 'Atendimento ao cliente',
          description: `
                    <ul class="company-reponsabilities">
                        <li>
                          Prestar assistência aos clientes relacionados ao produtos e serviços
                        </li>
                        <li>
                          Registo de possíveis reclamações e solicitações de clientes e assegurar o tratamento das mesmas
                        </li>
                        <li>
                         Venda de produtos e serviços via contactos telefónicos por meio de campanhas atribuídas pelo supervisor
                        </li>
                      </ul>
                    `,

          techs: [skill.AltitudeuAgentWindows, skill.PortalAtendimentoCliente],
          start_year: 2015,
          start_month: 12,
          end_year: 2016,
          end_month: 11,
        },
      ],
    },
  ]
}
