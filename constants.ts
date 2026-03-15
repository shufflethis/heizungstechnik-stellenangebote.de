import { Job, ArticleSection } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '6',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    tags: [],
    postedDate: '2026-03-15'
  },
  {
    id: '7',
    title: 'Anlagenmechaniker für Sanitär- und Heizungstechnik (m/w/d)',
    company: 'Tobias Bühler Heizungsbau',
    location: 'Kaufering',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker für Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-03-12'
  },
  {
    id: '8',
    title: 'Kundendienstmonteur für Sanitär- und Heizungstechnik (m/w/d)',
    company: 'Workwise GmbH',
    location: 'Lippetal',
    type: 'Vollzeit',
    description: 'Kundendienstmonteur für Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Kundendienstmonteur/in, -techniker/in'],
    postedDate: '2026-03-11'
  },
  {
    id: '9',
    title: 'Anlagenmechaniker (m/w/d) für Sanitär- und Heizungstechnik',
    company: 'KONZMANN GmbH',
    location: 'Großmaischeid',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker (m/w/d) für Sanitär- und Heizungstechnik',
    tags: ['Anlagenmechaniker/in'],
    postedDate: '2026-03-09'
  },
  {
    id: '10',
    title: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    company: 'Nephrocare Salzgitter GmbH Medizinisches Versorgungszentrum',
    location: 'Salzgitter',
    type: 'Vollzeit',
    description: 'Pflegefachkräfte oder Medizinische Fachangestellte (m/w/d) für die Dialyse',
    tags: [],
    postedDate: '2026-03-08'
  },
  {
    id: '11',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    tags: [],
    postedDate: '2026-03-08'
  },
  {
    id: '12',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    tags: [],
    postedDate: '2026-03-08'
  },
  {
    id: '13',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    tags: [],
    postedDate: '2026-03-08'
  },
  {
    id: '14',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    tags: [],
    postedDate: '2026-03-08'
  },
  {
    id: '15',
    title: 'Projektleiter:in Heizungstechnik (m/w/d)',
    company: '7Time GmbH',
    location: 'Beckum, Westfalen',
    type: 'Vollzeit',
    description: 'Projektleiter:in Heizungstechnik (m/w/d)',
    tags: ['Projektleiter/in'],
    postedDate: '2026-03-06'
  },
  {
    id: '16',
    title: 'Projektingenieur (m/w/d) Heizungstechnik',
    company: 'PlanET Biogastechnik',
    location: 'Gescher',
    type: 'Vollzeit',
    description: 'Projektingenieur (m/w/d) Heizungstechnik',
    tags: ['Ingenieur/in - Energietechnik'],
    postedDate: '2026-03-05'
  },
  {
    id: '17',
    title: 'Anlagenmechaniker/in Sanitär- und Heizungstechnik (m/w/d)',
    company: 'HESA Installationstechnik GmbH',
    location: 'Magdeburg',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker/in Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Gas- und Wasserinstallateur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '18',
    title: 'Anlagenmechaniker für Sanitär- und Heizungstechnik (m/w/d)',
    company: 'Sport- und Kurhotel Sonnenalp GmbH',
    location: 'Ofterschwang',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker für Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedDate: '2026-03-01'
  },
  {
    id: '19',
    title: 'Haushandwerker/-in Schwerpunkt Sanitär- und Heizungstechnik (m/w/d)',
    company: 'DAK-Gesundheit',
    location: 'Bad Segeberg',
    type: 'Vollzeit',
    description: 'Haushandwerker/-in Schwerpunkt Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-26'
  },
  {
    id: '20',
    title: 'Projektleiter:in Heizungstechnik (m/w/d)',
    company: '7Time GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Projektleiter:in Heizungstechnik (m/w/d)',
    tags: ['Projektleiter/in'],
    postedDate: '2026-02-25'
  },
  {
    id: '21',
    title: 'Anlagenmechaniker (m/w/d) Heizungstechnik',
    company: 'WISAG Gebäude- und Industrieservice Holding GmbH & Co. KG',
    location: 'Oldenburg (Oldb)',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker (m/w/d) Heizungstechnik',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-25'
  },
  {
    id: '22',
    title: 'Monteur für Sanitär und Heizungstechnik (m/w/d)',
    company: 'JUTZY Haustechnik & Service GmbH',
    location: 'Brandenburg an der Havel',
    type: 'Vollzeit',
    description: 'Monteur für Sanitär und Heizungstechnik (m/w/d)',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-25'
  },
  {
    id: '23',
    title: 'Anlagenmechaniker m/w/d - Sanitär-, Heizungstechnik',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker m/w/d - Sanitär-, Heizungstechnik',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-24'
  },
  {
    id: '24',
    title: 'Obermonteur für Heizungstechnik (m/w/d)',
    company: 'biac Personalservice GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Obermonteur für Heizungstechnik (m/w/d)',
    tags: ['Vorarbeiter/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-23'
  },
  {
    id: '25',
    title: 'Anlagenmechaniker Sanitär- und Heizungstechnik (m/w/d)',
    company: 'biac Personalservice GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker Sanitär- und Heizungstechnik (m/w/d)',
    tags: ['Anlagenmechaniker/in - Sanitär-, Heizungs- und Klimatechnik'],
    postedDate: '2026-02-23'
  }
];

// Content optimized for "Informative Text ~3000 Words equivalent depth"
export const SEO_CONTENT: ArticleSection[] = [
  {
    title: "Die Zukunft der Heizungstechnik: Ein Branchenüberblick",
    content: `
      <p class="mb-4">Die Heizungstechnik befindet sich im größten Umbruch ihrer Geschichte. Getrieben durch den Klimawandel und politische Vorgaben wie das Gebäudeenergiegesetz (GEG), wandelt sich die Branche von fossilen Brennstoffen hin zu erneuerbaren Energien. Dies schafft nicht nur Herausforderungen, sondern vor allem massive Chancen für Arbeitnehmer und Arbeitgeber.</p>
      <p class="mb-4">Wärmepumpen, Solarthermie, Hybridheizungen und wasserstofffähige Brennwertkessel sind die Technologien der Stunde. Wer heute in der Heizungstechnik arbeitet, ist nicht mehr nur "Klempner", sondern Klimaschützer, Elektroniker und IT-Experte in einer Person. Die Digitalisierung der Heizungskeller durch Smart-Home-Anbindungen und Fernwartungssysteme erfordert völlig neue Kompetenzprofile.</p>
      <p class="mb-4">Für Stellenangebote in der Heizungstechnik bedeutet dies: Die Nachfrage nach qualifiziertem Personal übersteigt das Angebot bei weitem. Fachkräfte haben eine hervorragende Verhandlungsposition, während Unternehmen neue Wege im Recruiting gehen müssen, um Talente zu gewinnen.</p>
    `
  },
  {
    title: "Berufsbilder in der Heizungstechnik: Vielfalt mit Zukunft",
    content: `
      <h3 class="text-xl font-semibold mb-2 text-brand-700">1. Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik (SHK)</h3>
      <p class="mb-4">Das Rückgrat der Branche. Anlagenmechaniker SHK installieren, warten und reparieren Heizungssysteme. Das Berufsbild hat sich stark technisiert. Neben dem Verpressen von Rohren gehört heute die Konfiguration von Regelungstechnik via Tablet zum Alltag. Spezialisierungen auf Wärmepumpen oder Lüftungstechnik sind gefragt wie nie.</p>

      <h3 class="text-xl font-semibold mb-2 text-brand-700">2. Kundendiensttechniker / Servicetechniker</h3>
      <p class="mb-4">Die Problemlöser vor Ort. Wenn die Heizung im Winter ausfällt, sind sie die Retter. Dieser Job erfordert tiefes technisches Verständnis, Geduld und hervorragende Kommunikationsfähigkeiten. Oft ausgestattet mit modernsten Diagnosegeräten und einem Firmenwagen, ist dies eine der bestbezahlten Positionen im Handwerk.</p>

      <h3 class="text-xl font-semibold mb-2 text-brand-700">3. Heizungsbaumeister / Projektleiter</h3>
      <p class="mb-4">Für alle, die mehr Verantwortung wollen. Meister übernehmen die Planung von Anlagen, die Kalkulation von Angeboten und die Führung von Mitarbeitern. Der Meistertitel ist zudem oft die Eintrittskarte in die Selbstständigkeit oder in höhere Managementpositionen bei großen SHK-Dienstleistern.</p>

      <h3 class="text-xl font-semibold mb-2 text-brand-700">4. Planer und Energieberater</h3>
      <p class="mb-4">Die Schnittstelle zwischen Kundenwunsch, technischer Machbarkeit und gesetzlichen Förderungen. Energieberater erstellen Sanierungsfahrpläne und berechnen Heizlasten. Ein Berufsfeld, das durch die komplexen Förderlandschaften (BAFA, KfW) enorm an Bedeutung gewinnt.</p>
    `
  },
  {
    title: "Für Arbeitgeber: Strategien gegen den Fachkräftemangel",
    content: `
      <p class="mb-4">Der Markt für Fachkräfte in der Heizungstechnik ist leergefegt. "Post & Pray" (Stellenanzeige schalten und beten) funktioniert nicht mehr. Arbeitgeber müssen sich heute bei den Arbeitnehmern bewerben, nicht umgekehrt. Erfolgreiches Recruiting setzt auf Employer Branding.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Sichtbarkeit:</strong> Eine moderne Website und Präsenz auf spezialisierten Jobbörsen wie heizungstechnik-stellenangebote.de sind Pflicht.</li>
        <li><strong>Benefits:</strong> Ein Obstkorb reicht nicht. 4-Tage-Woche, eigener Firmenwagen zur privaten Nutzung, betriebliche Altersvorsorge und vor allem Weiterbildungsbudgets sind die Währung, mit der man Talente gewinnt.</li>
        <li><strong>Weiterbildung:</strong> Bieten Sie Ihren Mitarbeitern Schulungen zur Wärmepumpe (VDI 4645) oder zum Kälteschein an. Das bindet Mitarbeiter und erhöht die Kompetenz Ihres Unternehmens.</li>
        <li><strong>Unternehmenskultur:</strong> Wertschätzung, flache Hierarchien und modernes Werkzeug. Ein Handwerker, der mit schlechtem Werkzeug arbeiten muss, wird das Unternehmen schnell verlassen.</li>
      </ul>
      <p class="mb-4">Investieren Sie in die Ausbildung. Die Azubis von heute sind die Fachkräfte von morgen. Eine qualitativ hochwertige Ausbildung spricht sich herum und stärkt Ihren Ruf in der Region.</p>
    `
  },
  {
    title: "Für Bewerber: Tipps für die Jobsuche und Karriere",
    content: `
      <p class="mb-4">Sie suchen einen Job in der Heizungstechnik? Herzlichen Glückwunsch, Sie sind in einer "Goldgräber-Branche". Dennoch sollten Sie bei der Wahl des Arbeitgebers genau hinschauen.</p>
      <h3 class="text-xl font-semibold mb-2 text-brand-700">Woran erkenne ich einen guten Arbeitgeber?</h3>
      <p class="mb-4">Achten Sie auf die Ausstattung. Werden digitale Tools (Tablets, Apps) genutzt? Wie modern ist der Fuhrpark? Bietet der Arbeitgeber Schulungen bei Herstellern (Viessmann, Vaillant, Bosch etc.) an? Ein guter Arbeitgeber investiert in Ihre Zukunft, weil er weiß, dass sich Technik schnell ändert.</p>
      
      <h3 class="text-xl font-semibold mb-2 text-brand-700">Gehaltsaussichten</h3>
      <p class="mb-4">Die Gehälter im SHK-Handwerk sind in den letzten Jahren deutlich gestiegen. Ein erfahrener Kundendienstmonteur kann, je nach Region und Spezialisierung, Jahresgehälter zwischen 45.000 € und 65.000 € erzielen. Meister und Projektleiter liegen oft deutlich darüber. Zuschläge für Notdienste und Montageeinsätze kommen oft noch oben drauf.</p>
      
      <h3 class="text-xl font-semibold mb-2 text-brand-700">Bewerbungstipps</h3>
      <p class="mb-4">Der klassische, formelle Anschreiben-Text ist im Handwerk oft zweitrangig. Wichtiger sind Qualifikationen (Gesellenbrief, Scheine) und Erfahrung. Seien Sie ehrlich bezüglich Ihrer Skills. Wenn Sie noch nie eine Wärmepumpe installiert haben, sagen Sie es – aber betonen Sie Ihre Lernbereitschaft. Fachwissen ist erlernbar, Motivation muss man mitbringen.</p>
    `
  },
  {
    title: "Technologietrends: Was Bewerber wissen müssen",
    content: `
      <p class="mb-4">Um als Fachkraft attraktiv zu bleiben, sollten Sie sich mit den aktuellen Trends beschäftigen:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Wärmepumpen:</strong> Das Herzstück der Wärmewende. Verstehen Sie den Kältekreis? Haben Sie den "Kälteschein"? Dies ist die wichtigste Qualifikation der nächsten 10 Jahre.</li>
        <li><strong>Hydraulischer Abgleich:</strong> Eine Pflichtaufgabe bei fast jeder Sanierung. Das Verständnis für Volumenströme und Heizkurven ist essenziell.</li>
        <li><strong>Smart Home:</strong> Konnektivität wird Standard. Sie müssen in der Lage sein, eine Heizung ins WLAN des Kunden einzubinden und Apps zu konfigurieren.</li>
        <li><strong>Sektorenkopplung:</strong> Die Verbindung von Photovoltaik (Strom) und Wärmepumpe (Heizung). Verständnis für Elektrotechnik wird immer wichtiger.</li>
      </ul>
    `
  }
];
