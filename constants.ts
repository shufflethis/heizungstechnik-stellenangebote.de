import { Job, ArticleSection } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Anlagenmechaniker SHK (m/w/d) für Wärmepumpen',
    company: 'EcoHeat Systems GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '45.000€ - 55.000€',
    description: 'Wir suchen einen Experten für die Installation moderner Wärmepumpensysteme.',
    postedDate: 'Vor 2 Tagen',
    tags: ['Wärmepumpe', 'SHK', 'Montage']
  },
  {
    id: '2',
    title: 'Heizungsbaumeister (m/w/d) als Teamleiter',
    company: 'Sanitär Müller & Söhne',
    location: 'München',
    type: 'Vollzeit',
    salary: '60.000€+',
    description: 'Führen Sie unser 10-köpfiges Montageteam und planen Sie Großprojekte.',
    postedDate: 'Vor 1 Woche',
    tags: ['Meister', 'Führung', 'Planung']
  },
  {
    id: '3',
    title: 'Servicetechniker für Brennertechnik (m/w/d)',
    company: 'ThermoService24',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '50.000€ + Firmenwagen',
    description: 'Wartung und Entstörung von Öl- und Gasheizungen im Kundendienst.',
    postedDate: 'Gestern',
    tags: ['Kundendienst', 'Wartung', 'Notdienst']
  },
  {
    id: '4',
    title: 'Planungsingenieur Versorgungstechnik (m/w/d)',
    company: 'Ingenieurbüro Schmidt',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    salary: '65.000€ - 80.000€',
    description: 'Planung komplexer TGA-Anlagen für Bürogebäude und Industrie.',
    postedDate: 'Vor 3 Tagen',
    tags: ['Ingenieur', 'TGA', 'Büro']
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
