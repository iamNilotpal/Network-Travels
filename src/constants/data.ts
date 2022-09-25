export const PLACES = [
  'Guwahati',
  'Jorhat',
  'Tinsukia',
  'Sivsagar',
  'Jakhalabandha',
  'Nagaon',
  'Morigaon',
  'Numoligar',
  'Moran',
  'Dhemaji',
  'Titabor',
  'Golaghat',
  'Nalbari',
  'Patsala',
  'Dhubri',
  'Silchar',
  'Karbi Alang',
  'Lakhimpur',
  'Dibrugarh',
];

export const BUSES = [
  {
    id: 1,
    from: 'Guwahati',
    morning: false,
    to: 'Jorhat',
    willReturn: false,
    ac: true,
    availableSeats: 31,
    lowerOccupied: [1, 7, 8],
    upperOccupied: [1, 3, 30],
    lowerBerth: 31,
    upperBerth: 15,
    departure: {
      date: '22-08-11',
      time: '07:00',
    },
    arrival: {
      date: '22-08-09',
      time: '19:30',
    },
    price: 470.0,
    actualPrice: 650.0,
    rest: 'Khanapara',
  },
  {
    id: 2,
    from: 'Guwahati',
    morning: true,
    to: 'Jorhat',
    willReturn: false,
    ac: true,
    availableSeats: 31,
    lowerOccupied: [1, 7, 8],
    upperOccupied: [1, 3, 30],
    lower_berth: 32,
    upper_berth: 15,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-09',
      time: '15:30',
    },
    price: 450.0,
    actualPrice: 550.0,
    rest: 'Khanapara',
  },
  {
    id: 3,
    from: 'Tinsukia',
    morning: false,
    to: 'Sivsagar',
    willReturn: false,
    ac: true,
    availableSeats: 31,
    lowerOccupied: [1, 10, 8],
    upperOccupied: [1, 3, 30],
    lowerBerth: 32,
    upperBerth: 20,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-15',
      time: '05:30',
    },
    price: 480.0,
    actualPrice: 680.0,
    rest: 'Khanapara',
  },
  {
    id: 4,
    from: 'Tezpur',
    morning: true,
    to: 'Guwahati',
    willReturn: false,
    ac: false,
    availableSeats: 28,
    lowerOccupied: [1, 10, 8],
    upperOccupied: [1, 3, 30],
    lowerBerth: 32,
    upperBerth: 20,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-15',
      time: '05:30',
    },
    price: 350.0,
    actualPrice: 500.0,
    rest: 'Mangaldai',
  },
];

export const FILTER_DATA = {
  departure: {
    title: 'DEPARTURE TIME',
    data: [
      {
        text: 'Before 6 AM',
        count: ' 12',
        time: {
          to: '06:00',
        },
      },
      {
        text: '6 AM to 12 PM',
        count: '06',
        time: { from: '06:00', to: '12:00' },
      },
      {
        text: '12 PM to 6 PM',
        count: '08',
        time: { from: '12:00', to: '18:00' },
      },
      {
        text: 'After 6 PM',
        count: '10',
        time: { from: '18:00' },
      },
    ],
  },
  busTypes: {
    title: 'BUS TYPES',
    data: [
      {
        text: 'AC',
        count: '24',
      },
      {
        text: 'NON-AC',
        count: '13',
      },
      {
        text: 'SLEEPER AC',
        count: '20',
      },
      {
        text: 'SLEEPER NON-AC',
        count: '18',
      },
    ],
  },
  arrival: {
    title: 'ARRIVAL TIME',
    data: [
      {
        text: 'Before 6 AM',
        count: '12',
      },
      {
        text: '6 AM to 12 PM',
        count: '06',
      },
      {
        text: '12 PM to 6 PM',
        count: '08',
      },
      {
        text: 'After 6 PM',
        count: '10',
      },
    ],
  },
};

export const LOWER_BERTH = [
  {
    text: '1',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '2',
    visible: true,
  },
  {
    text: '3',
    visible: true,
  },
  {
    text: '4',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '5',
    visible: true,
  },
  {
    text: '6',
    visible: true,
  },
  {
    text: '7',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '8',
    visible: true,
  },
  {
    text: '9',
    visible: true,
  },
  {
    text: '10',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '11',
    visible: true,
  },
  {
    text: '12',
    visible: true,
  },
  {
    text: '13',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '14',
    visible: true,
  },
  {
    text: '15',
    visible: true,
  },
  {
    text: '16',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '17',
    visible: true,
  },
  {
    text: '18',
    visible: true,
  },
  {
    text: '19',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '20',
    visible: true,
  },
  {
    text: '21',
    visible: true,
  },

  {
    text: '22',
    visible: true,
  },

  {
    text: '',
    visible: false,
  },

  {
    text: '23',
    visible: true,
  },

  {
    text: '24',
    visible: true,
  },

  {
    text: '25',
    visible: true,
  },

  {
    text: '',
    visible: false,
  },

  {
    text: '26',
    visible: true,
  },
  {
    text: '27',
    visible: true,
  },
  {
    text: '28',
    visible: true,
  },
  {
    text: '29',
    visible: true,
  },
  {
    text: '30',
    visible: true,
  },
  {
    text: '31',
    visible: true,
  },
];

export const UPPER_BERTH = [
  {
    text: '1',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '2',
    visible: true,
  },
  {
    text: '3',
    visible: true,
  },
  {
    text: '4',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '5',
    visible: true,
  },
  {
    text: '6',
    visible: true,
  },
  {
    text: '7',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '8',
    visible: true,
  },
  {
    text: '9',
    visible: true,
  },
  {
    text: '10',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '11',
    visible: true,
  },
  {
    text: '12',
    visible: true,
  },
  {
    text: '13',
    visible: true,
  },
  {
    text: '',
    visible: false,
  },
  {
    text: '14',
    visible: true,
  },
  {
    text: '15',
    visible: true,
  },
];
