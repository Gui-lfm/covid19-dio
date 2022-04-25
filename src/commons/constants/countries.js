import Flags from 'country-flag-icons/react/3x2'

const COUNTRIES = [
    {
        label: 'Alemanha',
        value: 'germany',
        flag: <Flags.DE style={{ width: 24 }} />
    },
    {
        label: 'Brasil',
        value: 'brazil',
        flag: <Flags.BR style={{ width: 24 }} />
    },
    {
        label: 'China',
        value: 'china',
        flag: <Flags.CN style={{ width: 24 }} />
    },
    {
        label: 'Estados Unidos',
        value: 'usa',
        flag: <Flags.US style={{ width: 24 }} />
    },
    {
        label: 'Itália',
        value: 'italy',
        flag: <Flags.IT style={{ width: 24 }} />
    },
    {
        label: 'India',
        value: 'India',
        flag: <Flags.IN style={{ width: 24 }} />
    },
    {
        label: 'França',
        value: 'France',
        flag: <Flags.FR style={{ width: 24 }} />
    },
    {
        label: 'Reino Unido',
        value: 'uk',
        flag: <Flags.GB style={{ width: 24 }} />
    },
    {
        label: 'Russia',
        value: 'Russia',
        flag: <Flags.RU style={{ width: 24 }} />
    },
    {
        label: 'Turquia',
        value: 'Turkey',
        flag: <Flags.TR style={{ width: 24 }} />
    },
    {
        label: 'Espanha',
        value: 'Spain',
        flag: <Flags.ES style={{ width: 24 }} />
    },
    {
        label: 'Vietnã',
        value: 'Vietnam',
        flag: <Flags.VN style={{ width: 24 }} />
    },
    {
        label: 'Argentina',
        value: 'Argentina',
        flag: <Flags.AR style={{ width: 24 }} />
    },
    {
        label: 'Holanda',
        value: 'Netherlands',
        flag: <Flags.NL style={{ width: 24 }} />
    },
    {
        label: 'Japão',
        value: 'Japan',
        flag: <Flags.JP style={{ width: 24 }} />
    },
    {
        label: 'Irã',
        value: 'Iran',
        flag: <Flags.IR style={{ width: 24 }} />
    },
    {
        label: 'Colombia',
        value: 'Colombia',
        flag: <Flags.CO style={{ width: 24 }} />
    },
    {
        label: 'Indonesia',
        value: 'Indonesia',
        flag: <Flags.ID style={{ width: 24 }} />
    },
    {
        label: 'Polônia',
        value: 'Poland',
        flag: <Flags.PL style={{ width: 24 }} />
    },
    {
        label: 'México',
        value: 'Mexico',
        flag: <Flags.MX style={{ width: 24 }} />
    },
    {
        label: 'Australia',
        value: 'Australia',
        flag: <Flags.AU style={{ width: 24 }} />
    },
    {
        label: 'Ucrânia',
        value: 'Ukraine',
        flag: <Flags.UA style={{ width: 24 }} />
    },
    {
        label: 'Malásia',
        value: 'Malaysia',
        flag: <Flags.MY style={{ width: 24 }} />
    },
    {
        label: 'Tailândia',
        value: 'Thailand',
        flag: <Flags.TH style={{ width: 24 }} />
    },
    {
        label: 'Austria',
        value: 'Austria',
        flag: <Flags.AT style={{ width: 24 }} />
    },
    {
        label: 'Israel',
        value: 'Israel',
        flag: <Flags.IL style={{ width: 24 }} />
    },
    {
        label: 'Bélgica',
        value: 'Belgium',
        flag: <Flags.BE style={{ width: 24 }} />
    },
    {
        label: 'Tchéquia',
        value: 'Czechia',
        flag: <Flags.CZ style={{ width: 24 }} />
    },
    {
        label: 'Portugal',
        value: 'Portugal',
        flag: <Flags.PT style={{ width: 24 }} />
    },
    {
        label: 'Coréia do Sul',
        value: 's. korea',
        flag: <Flags.KR style={{ width: 24 }} />
    },
    {
        label: 'Africa do sul',
        value: 'South Africa',
        flag: <Flags.ZA style={{ width: 24 }} />
    },
    {
        label: 'Canadá',
        value: 'Canada',
        flag: <Flags.CA style={{ width: 24 }} />
    },
    {
        label: 'Filipinas',
        value: 'Philippines',
        flag: <Flags.PH style={{ width: 24 }} />
    },
    {
        label: 'Suíça',
        value: 'Switzerland',
        flag: <Flags.CH style={{ width: 24 }} />
    },
    {
        label: 'Peru',
        value: 'Peru',
        flag: <Flags.PE style={{ width: 24 }} />
    },
    {
        label: 'Chile',
        value: 'Chile',
        flag: <Flags.CL style={{ width: 24 }} />
    },
    {
        label: 'Grécia',
        value: 'Greece',
        flag: <Flags.GR style={{ width: 24 }} />
    },
    {
        label: 'Dinamarca',
        value: 'Denmark',
        flag: <Flags.DK style={{ width: 24 }} />
    },
    {
        label: 'Romênia',
        value: 'Romania',
        flag: <Flags.RO style={{ width: 24 }} />
    },
    {
        label: 'Suécia',
        value: 'Sweden',
        flag: <Flags.SE style={{ width: 24 }} />
    },
    {
        label: 'Iraque',
        value: 'Iraq',
        flag: <Flags.IQ style={{ width: 24 }} />
    },
    {
        label: 'Sérvia',
        value: 'Serbia',
        flag: <Flags.RS style={{ width: 24 }} />
    },
    {
        label: 'Bangladesh',
        value: 'Bangladesh',
        flag: <Flags.BD style={{ width: 24 }} />
    },
    {
        label: 'Hungria',
        value: 'Hungary',
        flag: <Flags.HU style={{ width: 24 }} />
    },
    {
        label: 'Eslováquia',
        value: 'Slovakia',
        flag: <Flags.SK style={{ width: 24 }} />
    },
    {
        label: 'Jordão',
        value: 'Jordan',
        flag: <Flags.JO style={{ width: 24 }} />
    },
    {
        label: 'Geórgia',
        value: 'Georgia',
        flag: <Flags.GE style={{ width: 24 }} />
    },
    {
        label: 'Paquistão',
        value: 'Pakistan',
        flag: <Flags.PK style={{ width: 24 }} />
    },
    {
        label: 'Irlanda',
        value: 'Ireland',
        flag: <Flags.IE style={{ width: 24 }} />
    },
    {
        label: 'Cazaquistão',
        value: 'Kazakhstan',
        flag: <Flags.KZ style={{ width: 24 }} />
    },
    {
        label: 'Singapura',
        value: 'Singapore',
        flag: <Flags.SG style={{ width: 24 }} />
    },
    {
        label: 'Marrocos',
        value: 'Morocco',
        flag: <Flags.MA style={{ width: 24 }} />
    },
    {
        label: 'Bulgária',
        value: 'Bulgaria',
        flag: <Flags.BG style={{ width: 24 }} />
    },
    {
        label: 'Croácia',
        value: 'Croatia',
        flag: <Flags.HR style={{ width: 24 }} />
    },
    {
        label: 'Cuba',
        value: 'Cuba',
        flag: <Flags.CU style={{ width: 24 }} />
    },
    {
        label: 'Líbano',
        value: 'Lebanon',
        flag: <Flags.LB style={{ width: 24 }} />
    },
    {
        label: 'Lituania',
        value: 'Lithuania',
        flag: <Flags.LT style={{ width: 24 }} />
    },
    {
        label: 'Tunisia',
        value: 'Tunisia',
        flag: <Flags.TN style={{ width: 24 }} />
    },
    {
        label: 'Eslovênia',
        value: 'Slovenia',
        flag: <Flags.SI style={{ width: 24 }} />
    },
    {
        label: 'Finlândia',
        value: 'Finland',
        flag: <Flags.FI style={{ width: 24 }} />
    },
    {
        label: 'Nepal',
        value: 'Nepal',
        flag: <Flags.NP style={{ width: 24 }} />
    },
    {
        label: 'Bielorrússia',
        value: 'Belarus',
        flag: <Flags.BY style={{ width: 24 }} />
    },
    {
        label: 'Bolivia',
        value: 'Bolivia',
        flag: <Flags.BO style={{ width: 24 }} />
    },
    {
        label: 'Uruguai',
        value: 'Uruguay',
        flag: <Flags.UY style={{ width: 24 }} />
    },
    {
        label: 'Nova Zelandia',
        value: 'New Zealand',
        flag: <Flags.NZ style={{ width: 24 }} />
    },
    {
        label: 'Equador',
        value: 'Ecuador',
        flag: <Flags.EC style={{ width: 24 }} />
    },
    {
        label: 'Costa Rica',
        value: 'Costa Rica',
        flag: <Flags.CR style={{ width: 24 }} />
    },
    {
        label: 'Guatemala',
        value: 'Guatemala',
        flag: <Flags.GT style={{ width: 24 }} />
    },
    {
        label: 'Letônia',
        value: 'Latvia',
        flag: <Flags.LV style={{ width: 24 }} />
    },
    {
        label: 'Azerbaijão',
        value: 'Azerbaijan',
        flag: <Flags.AZ style={{ width: 24 }} />
    },
    {
        label: 'Panamá',
        value: 'Panama',
        flag: <Flags.PA style={{ width: 24 }} />
    },
    {
        label: 'Arabia Saudita',
        value: 'Saudi Arabia',
        flag: <Flags.SA style={{ width: 24 }} />
    },
    {
        label: 'Sri Lanka',
        value: 'Sri Lanka',
        flag: <Flags.LK style={{ width: 24 }} />
    },
    {
        label: 'Paraguai',
        value: 'Paraguay',
        flag: <Flags.PY style={{ width: 24 }} />
    },
    {
        label: 'Kuwait',
        value: 'Kuwait',
        flag: <Flags.KW style={{ width: 24 }} />
    },
    {
        label: 'Myanmar',
        value: 'Myanmar',
        flag: <Flags.MM style={{ width: 24 }} />
    },
    {
        label: 'Palestina',
        value: 'Palestine',
        flag: <Flags.PS style={{ width: 24 }} />
    },
    {
        label: 'Rep. Dominicana',
        value: 'Dominican Republic',
        flag: <Flags.DO style={{ width: 24 }} />
    },
    {
        label: 'Estonia',
        value: 'Estonia',
        flag: <Flags.EE style={{ width: 24 }} />
    },
    {
        label: 'Bahrein',
        value: 'Bahrain',
        flag: <Flags.BH style={{ width: 24 }} />
    },
    {
        label: 'Venezuela',
        value: 'Venezuela',
        flag: <Flags.VE style={{ width: 24 }} />
    },
    {
        label: 'Moldavia',
        value: 'Moldova',
        flag: <Flags.MD style={{ width: 24 }} />
    },
    {
        label: 'Egito',
        value: 'Egypt',
        flag: <Flags.EG style={{ width: 24 }} />
    },
    {
        label: 'Líbia',
        value: 'Libya',
        flag: <Flags.LY style={{ width: 24 }} />
    },
    {
        label: 'Chipre',
        value: 'Cyprus',
        flag: <Flags.CY style={{ width: 24 }} />
    },
    {
        label: 'Etiópia',
        value: 'Ethiopia',
        flag: <Flags.ET style={{ width: 24 }} />
    },
    {
        label: 'Mongolia',
        value: 'Mongolia',
        flag: <Flags.MN style={{ width: 24 }} />
    },
    {
        label: 'Armenia',
        value: 'Armenia',
        flag: <Flags.AM style={{ width: 24 }} />
    },
    {
        label: 'Honduras',
        value: 'Honduras',
        flag: <Flags.HN style={{ width: 24 }} />
    },
    {
        label: 'Omã',
        value: 'Oman',
        flag: <Flags.OM style={{ width: 24 }} />
    },
    {
        label: 'Bósnia-Herzegovina',
        value: 'Bosnia and Herzegovina',
        flag: <Flags.BA style={{ width: 24 }} />
    },
    {
        label: 'Catar',
        value: 'Qatar',
        flag: <Flags.QA style={{ width: 24 }} />
    },
    {
        label: 'Quênia',
        value: 'Kenya',
        flag: <Flags.KE style={{ width: 24 }} />
    },
    {
        label: 'Zambia',
        value: 'Zambia',
        flag: <Flags.ZM style={{ width: 24 }} />
    },
    {
        label: 'Macedonia',
        value: 'North Macedonia',
        flag: <Flags.MK style={{ width: 24 }} />
    },
    {
        label: 'Botsuana',
        value: 'Botswana',
        flag: <Flags.BW style={{ width: 24 }} />
    },
    {
        label: 'Albania',
        value: 'Albania',
        flag: <Flags.AL style={{ width: 24 }} />
    },
    {
        label: 'Argélia',
        value: 'Algeria',
        flag: <Flags.DZ style={{ width: 24 }} />
    },
    {
        label: 'Nigeria',
        value: 'Nigeria',
        flag: <Flags.NG style={{ width: 24 }} />
    },
    {
        label: 'Noruega',
        value: 'Norway',
        flag: <Flags.NO style={{ width: 24 }} />
    },
    {
        label: 'Zimbábue',
        value: 'Zimbabwe',
        flag: <Flags.ZW style={{ width: 24 }} />
    },
    {
        label: 'Uzbequistão',
        value: 'Uzbekistan',
        flag: <Flags.UZ style={{ width: 24 }} />
    },
    {
        label: 'Montenegro',
        value: 'Montenegro',
        flag: <Flags.ME style={{ width: 24 }} />
    },
    {
        label: 'Luxemburgo',
        value: 'Luxembourg',
        flag: <Flags.LU style={{ width: 24 }} />
    },
    {
        label: 'Moçambique',
        value: 'Mozambique',
        flag: <Flags.MZ style={{ width: 24 }} />
    },
    {
        label: 'Laos',
        value: 'Laos',
        flag: <Flags.LA style={{ width: 24 }} />
    },
    {
        label: 'Islândia',
        value: 'Iceland',
        flag: <Flags.IS style={{ width: 24 }} />
    },
    {
        label: 'Maldivas',
        value: 'Maldives',
        flag: <Flags.MV style={{ width: 24 }} />
    },
    {
        label: 'Afeganistão',
        value: 'Afghanistan',
        flag: <Flags.AF style={{ width: 24 }} />
    },
    {
        label: 'Uganda',
        value: 'Uganda',
        flag: <Flags.UG style={{ width: 24 }} />
    },
    {
        label: 'El Salvador',
        value: 'El Salvador',
        flag: <Flags.SV style={{ width: 24 }} />
    },
    {
        label: 'Gana',
        value: 'Ghana',
        flag: <Flags.GH style={{ width: 24 }} />
    },
    {
        label: 'Namíbia',
        value: 'Namibia',
        flag: <Flags.NA style={{ width: 24 }} />
    },
    {
        label: 'Martinica',
        value: 'Martinique',
        flag: <Flags.MQ style={{ width: 24 }} />
    },
    {
        label: 'Trinidade e Tobago',
        value: 'Trinidad and Tobago',
        flag: <Flags.TT style={{ width: 24 }} />
    },
    {
        label: 'Cambodja',
        value: 'Cambodia',
        flag: <Flags.KH style={{ width: 24 }} />
    },
    {
        label: 'Ruanda',
        value: 'Rwanda',
        flag: <Flags.RW style={{ width: 24 }} />
    },
    {
        label: 'Jamaica',
        value: 'Jamaica',
        flag: <Flags.JM style={{ width: 24 }} />
    },
    {
        label: 'Camarões',
        value: 'Cameroon',
        flag: <Flags.CM style={{ width: 24 }} />
    },
    {
        label: 'Angola',
        value: 'Angola',
        flag: <Flags.AO style={{ width: 24 }} />
    },
    {
        label: 'Malta',
        value: 'Malta',
        flag: <Flags.MT style={{ width: 24 }} />
    },
    {
        label: 'Senegal',
        value: 'Senegal',
        flag: <Flags.SN style={{ width: 24 }} />
    },
    {
        label: 'Malawi',
        value: 'Malawi',
        flag: <Flags.MW style={{ width: 24 }} />
    },
    {
        label: 'Costa do Marfim',
        value: 'Ivory Coast',
        flag: <Flags.CI style={{ width: 24 }} />
    },
    {
        label: 'Guiana Francesa',
        value: 'French Guiana',
        flag: <Flags.GF style={{ width: 24 }} />
    },
    {
        label: 'Suriname',
        value: 'Suriname',
        flag: <Flags.SR style={{ width: 24 }} />
    },
    {
        label: 'Polinésia Francesa',
        value: 'French Polynesia',
        flag: <Flags.PF style={{ width: 24 }} />
    },
    {
        label: 'Barbados',
        value: 'Barbados',
        flag: <Flags.BB style={{ width: 24 }} />
    },
    {
        label: 'Fiji',
        value: 'Fiji',
        flag: <Flags.FJ style={{ width: 24 }} />
    },
    {
        label: 'Madagascar',
        value: 'Madagascar',
        flag: <Flags.MG style={{ width: 24 }} />
    },
    {
        label: 'Guiana',
        value: 'Guyana',
        flag: <Flags.GY style={{ width: 24 }} />
    },
    {
        label: 'Sudão',
        value: 'Sudan',
        flag: <Flags.SD style={{ width: 24 }} />
    },
    {
        label: 'Mauritânia',
        value: 'Mauritania',
        flag: <Flags.MR style={{ width: 24 }} />
    },
    {
        label: 'Butão',
        value: 'Bhutan',
        flag: <Flags.BT style={{ width: 24 }} />
    },
    {
        label: 'Belize',
        value: 'Belize',
        flag: <Flags.BZ style={{ width: 24 }} />
    },
    {
        label: 'Taiwan',
        value: 'Taiwan',
        flag: <Flags.TW style={{ width: 24 }} />
    },
    {
        label: 'Cabo Verde',
        value: 'Cabo Verde',
        flag: <Flags.CV style={{ width: 24 }} />
    },
    {
        label: 'Síria',
        value: 'Syria',
        flag: <Flags.SY style={{ width: 24 }} />
    },
    {
        label: 'Gabão',
        value: 'Gabon',
        flag: <Flags.GA style={{ width: 24 }} />
    },
    {
        label: 'Papua Nova Guiné',
        value: 'Papua New Guinea',
        flag: <Flags.PG style={{ width: 24 }} />
    },
    {
        label: 'Seychelles',
        value: 'Seychelles',
        flag: <Flags.SC style={{ width: 24 }} />
    },
    {
        label: 'Curaçao',
        value: 'Curaçao',
        flag: <Flags.CW style={{ width: 24 }} />
    },
    {
        label: 'Andorra',
        value: 'Andorra',
        flag: <Flags.AD style={{ width: 24 }} />
    },
    {
        label: 'Burundi',
        value: 'Burundi',
        flag: <Flags.BI style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Maurício',
        value: 'Mauritius',
        flag: <Flags.MU style={{ width: 24 }} />
    },
    {
        label: 'Togo',
        value: 'Togo',
        flag: <Flags.TG style={{ width: 24 }} />
    },
    {
        label: 'Guiné',
        value: 'Guinea',
        flag: <Flags.GN style={{ width: 24 }} />
    },
    {
        label: 'Aruba',
        value: 'Aruba',
        flag: <Flags.AW style={{ width: 24 }} />
    },
    {
        label: 'Tanzânia',
        value: 'Tanzania',
        flag: <Flags.TZ style={{ width: 24 }} />
    },
    {
        label: 'Bahamas',
        value: 'Bahamas',
        flag: <Flags.BS style={{ width: 24 }} />
    },
    {
        label: 'Lesoto',
        value: 'Lesotho',
        flag: <Flags.LS style={{ width: 24 }} />
    },
    {
        label: 'Mali',
        value: 'Mali',
        flag: <Flags.ML style={{ width: 24 }} />
    },
    {
        label: 'Haiti',
        value: 'Haiti',
        flag: <Flags.HT style={{ width: 24 }} />
    },
    {
        label: 'Benin',
        value: 'Benin',
        flag: <Flags.BJ style={{ width: 24 }} />
    },
    {
        label: 'Somália',
        value: 'Somalia',
        flag: <Flags.SO style={{ width: 24 }} />
    },
    {
        label: 'Timor-Leste',
        value: 'Timor-Leste',
        flag: <Flags.TL style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Cayman',
        value: 'Cayman Islands',
        flag: <Flags.KY style={{ width: 24 }} />
    },
    {
        label: 'Burkina Faso',
        value: 'Burkina Faso',
        flag: <Flags.BF style={{ width: 24 }} />
    },
    {
        label: 'Nicaragua',
        value: 'Nicaragua',
        flag: <Flags.NI style={{ width: 24 }} />
    },
    {
        label: 'Tajiquistão',
        value: 'Tajikistan',
        flag: <Flags.TJ style={{ width: 24 }} />
    },
    {
        label: 'Liechtenstein',
        value: 'Liechtenstein',
        flag: <Flags.LI style={{ width: 24 }} />
    },
    {
        label: 'San Marino',
        value: 'San Marino',
        flag: <Flags.SM style={{ width: 24 }} />
    },
    {
        label: 'Guiné Equatorial',
        value: 'Equatorial Guinea',
        flag: <Flags.GQ style={{ width: 24 }} />
    },
    {
        label: 'Djibouti',
        value: 'Djibouti',
        flag: <Flags.DJ style={{ width: 24 }} />
    },
    {
        label: 'Granada',
        value: 'Grenada',
        flag: <Flags.GD style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Salomão',
        value: 'Solomon Islands',
        flag: <Flags.SB style={{ width: 24 }} />
    },
    {
        label: 'Bermuda',
        value: 'Bermuda',
        flag: <Flags.BM style={{ width: 24 }} />
    },
    {
        label: 'Dominica',
        value: 'Dominica',
        flag: <Flags.DM style={{ width: 24 }} />
    },
    {
        label: 'Gâmbia',
        value: 'Gambia',
        flag: <Flags.GM style={{ width: 24 }} />
    },
    {
        label: 'Groenlândia',
        value: 'Greenland',
        flag: <Flags.GL style={{ width: 24 }} />
    },
    {
        label: 'Iêmen',
        value: 'Yemen',
        flag: <Flags.YE style={{ width: 24 }} />
    },
    {
        label: 'Monaco',
        value: 'Monaco',
        flag: <Flags.MC style={{ width: 24 }} />
    },
    {
        label: 'Tonga',
        value: 'Tonga',
        flag: <Flags.TO style={{ width: 24 }} />
    },
    {
        label: 'Níger',
        value: 'Niger',
        flag: <Flags.NE style={{ width: 24 }} />
    },
    {
        label: 'Guiné-Bissau',
        value: 'Guinea-Bissau',
        flag: <Flags.GW style={{ width: 24 }} />
    },
    {
        label: 'Serra Leoa',
        value: 'Sierra Leone',
        flag: <Flags.SL style={{ width: 24 }} />
    },
    {
        label: 'Antígua e Barbuda',
        value: 'Antigua and Barbuda',
        flag: <Flags.AG style={{ width: 24 }} />
    },
    {
        label: 'Liberia',
        value: 'Liberia',
        flag: <Flags.LR style={{ width: 24 }} />
    },
    {
        label: 'Samoa',
        value: 'Samoa',
        flag: <Flags.WS style={{ width: 24 }} />
    },
    {
        label: 'Vanuatu',
        value: 'Vanuatu',
        flag: <Flags.VU style={{ width: 24 }} />
    },
    {
        label: 'São Tome e Principe',
        value: 'Sao Tome and Principe',
        flag: <Flags.ST style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Virgens Britânicas',
        value: 'British Virgin Islands',
        flag: <Flags.VG style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Cook',
        value: 'Cook Islands',
        flag: <Flags.CK style={{ width: 24 }} />
    },
    {
        label: 'Montserrat',
        value: 'Montserrat',
        flag: <Flags.MS style={{ width: 24 }} />
    },
    {
        label: 'Macau',
        value: 'Macao',
        flag: <Flags.MO style={{ width: 24 }} />
    },
    {
        label: 'Vaticano',
        value: 'Vatican City',
        flag: <Flags.VA style={{ width: 24 }} />
    },
    {
        label: 'Ilhas Marshall',
        value: 'Marshall Islands',
        flag: <Flags.MH style={{ width: 24 }} />
    },
    {
        label: 'Niue',
        value: 'Niue',
        flag: <Flags.NU style={{ width: 24 }} />
    },
    {
        label: 'Nauru',
        value: 'Nauru',
        flag: <Flags.NR style={{ width: 24 }} />
    },
    {
        label: 'Santa Helena',
        value: 'Saint Helena',
        flag: <Flags.SH style={{ width: 24 }} />
    },
    {
        label: 'Micronésia',
        value: 'Micronesia',
        flag: <Flags.FM style={{ width: 24 }} />
    },
    {
        label: 'Hong Kong',
        value: 'Hong Kong',
        flag: <Flags.HK style={{ width: 24 }} />
    },
]

export default COUNTRIES