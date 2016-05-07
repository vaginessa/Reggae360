angular.module('starter.services', [])
    .factory('EventService',
        function () {
            var events = [
                {
                    name: 'Reggae Party',
                    venue: 'Milan, Italy',
                    time: '5pm',
                    description: 'Highlighting reggae day in Italy, JulyOne',
                    onDeal: true,
                    soldOut: false,
                    id: 1,
                    images: [
                        {
                            full: '',
                            thumb: 'http://www.makeathumbnail.com/thumbnails/image487095.jpg'
                }
            ]
        },
                {
                    name: 'Rock-Steady Conference',
                    venue: 'Moscow',
                    time: '5pm',
                    description: 'Highlighting reggae day in Moscow, JulyOne',
                    onDeal: true,
                    soldOut: false,
                    id: 2,
                    images: [
                        {
                            full: '',
                            thumb: 'http://www.makeathumbnail.com/thumbnails/image487101.jpeg'
                }
            ]
        },
                {
                    name: 'Irie Link up',
                    venue: 'Kingston 5, Jamaica',
                    time: '10pm',
                    description: 'Highlighting reggae day Kingston, JulyOne',
                    onDeal: true,
                    soldOut: false,
                    id: 3,
                    images: [
                        {
                            full: '',
                            thumb: 'http://www.makeathumbnail.com/thumbnails/image487101.jpeg'
                }
            ]
        },
    ];
            return {
                GetEvents: function () {
                    return events;
                },

                GetEvent: function(eventId) {
                    for (var i = 0; i < events.length; i++) {
                        if (events[i].id == eventId) {
                            return events[i];
                        }
                    }
                }
            }

        });