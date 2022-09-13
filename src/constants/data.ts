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
    will_return: false,
    ac: true,
    avail_seat: 20,
    lower_occupied: [1, 7, 8],
    upper_occupied: [1, 3, 30],
    lower_berth: 32,
    upper_berth: 20,
    departure: {
      date: '22-08-11',
      time: '07:00',
    },
    arrival: {
      date: '22-08-09',
      time: '19:30',
    },
    amenities: ['Fan', 'Window screen', 'Charging port', 'Tv', 'Music system'],
    price: 470.0,
    ac_price: 650.0,
    rest: 'Khanapara',
  },
  {
    id: 2,
    from: 'Guwahati',
    morning: true,
    to: 'Jorhat',
    will_return: false,
    ac: true,
    avail_seat: 28,
    lower_occupied: [1, 7, 8],
    upper_occupied: [1, 3, 30],
    lower_berth: 32,
    upper_berth: 20,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-09',
      time: '15:30',
    },
    amenities: ['Fan', 'Window screen', 'Charging port', 'Tv', 'Music system'],
    price: 450.0,
    ac_price: 550.0,
    rest: 'Khanapara',
  },
  {
    id: 3,
    from: 'Tinsukia',
    morning: false,
    to: 'Sivsagar',
    will_return: false,
    ac: true,
    avail_seat: 28,
    lower_occupied: [1, 10, 8],
    upper_occupied: [1, 3, 30],
    lower_berth: 32,
    upper_berth: 20,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-15',
      time: '05:30',
    },
    amenities: ['Fan', 'Window screen', 'Charging port', 'Tv', 'Music system'],
    price: 600.0,
    ac_price: 480.0,
    rest: 'Khanapara',
  },
  {
    id: 4,
    from: 'Tezpur',
    morning: true,
    to: 'Guwahati',
    will_return: false,
    ac: false,
    avail_seat: 28,
    lower_occupied: [1, 10, 8],
    upper_occupied: [1, 3, 30],
    lower_berth: 32,
    upper_berth: 20,
    departure: {
      date: '22-08-11',
      time: '05:00',
    },
    arrival: {
      date: '22-08-15',
      time: '05:30',
    },
    amenities: ['Fan', 'Window screen', 'Charging port', 'Tv', 'Music system'],
    price: 350.0,
    ac_price: 500.0,
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
