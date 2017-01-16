import {Cars} from '../api/cars';

const cars =[
    {
        brand: 'Dodge',
        model: 'Charger',
        color:  'Pomarańczowy',
        year:   "1969",
        description: "Dla rocznika 1969 przygotowano zestaw niewielkich zmian, główną z nich było przestylizowanie przedniego grilla. Moc jednostek napędowych pozostała niezmieniona. Bazowym źródłem napędu był silnik R6 3.7 (225). W 1969 Dodge rozpoczął testy wersji Charger Daytona - cechowała się ona nadwoziem z przedłużoną o 18 cali (460 mm) przednią częścią, charakterystycznym noskiem. Jako podstawowe źródło napędu służył silnik V8 440, opcjonalnie dostępny był 426 HEMI",
        condition: "Zadbany",
        details: {
            priceFormat:"PLN",
            distanceFormat:"km",
            maxVFormat:"km/h",
            horsepowerFormat:"KM",
            price: "200 000",
            distance: "354 342",
            engine: "V8 6.1L",
            horsepower: "800",
            maxV:"250"

        },
        type: "o"

    },
    {
        brand: 'Chevrolet' ,
        model: 'Camaro',
        color:  'Czerwony',
        year:   "1970",
        description:"Chevrolet Camaro",
        condition: "Zadbany",
        details: {
            priceFormat:"PLN",
            distanceFormat:"km",
            maxVFormat:"km/h",
            horsepowerFormat:"KM",
            price: "100 000",
            distance: "201 243",
            engine: "V8 3L",
            horsepower: "300",
            maxV:"200"

        },
        type: "o"

    },
    {
        brand : "Ford",
        model: "Transit",
        color: "Biały",
        year: "2010",
        description:"Przestrzeń ładunkowa w nowym Fordzie Transit  oferuje spore możliwości transportowe. Jej pojemność może wynosić nawet 15,1 m3 i pozwala zmieścić ładunek o długości do 4,2 m. Natomiast fabrycznie montowany hak holowniczy umożliwia holowanie przyczepy o łącznej masie do 3,5 tony.",
        condition: "Nowy",
        details: {
            priceFormat:"PLN",
            distanceFormat:"km",
            maxVFormat:"km/h",
            horsepowerFormat:"KM",
            price: "34 500",
            distance: "0",
            engine: "Diesel 2.2L",
            horsepower: "130",
            maxV:"200"

        },
        type: "d"
    },
    {
        brand: 'Dodge',
        model: 'Challanger',
        color:  'Czarny',
        year:   "2012",
        description:"Pierwsza generacja Challengera (1970-74) opierała się na płycie podłogowej Chrysler E-platform, dzieliła większość elementów konstrukcyjnych z Plymouthem Barracudą. Druga generacja, produkowana w latach 1978-1983, była modelem bliźniaczym dla Mitsubishi Galanta Lambda. Trzecie wcielenie zostało wprowadzone na rynek w 2008 roku jako konkurent dla piątej generacji Forda Mustanga i nowego Camaro.",
        condition: "Zadbany",
        details: {
            priceFormat:"PLN",
            distanceFormat:"km",
            maxVFormat:"km/h",
            horsepowerFormat:"KM",
            price: "300 000",
            distance: "100 000",
            engine: "SRT Hellcat V8 6.2L",
            horsepower: "700",
            maxV:"340"

        },
        type: "o"

    },
    {
        brand: 'Kenworth' ,
        model: 'T680',
        color:  'Niebieski',
        year:   "2016",
        description:"Amerykańska ciężarówka marki Kenworth oferuje niezwykłą moc w ładnym opakowaniu. Tą ciężarówką zostaniesz panem europejskich tras.",
        condition: "Nowy",
        details: {
            priceFormat:"USD",
            distanceFormat:"mil",
            maxVFormat:"MPH",
            horsepowerFormat:"KM",
            price: "160 000",
            distance: "0",
            engine: "PACCAR MX-13",
            horsepower: "510",
            maxV:"90"

        },
        type: "c"

    },
    {
        brand: 'Kenworth' ,
        model: 'T680',
        color:  'Niebieski',
        year:   "2016",
        description:"Amerykańska ciężarówka marki Kenworth oferuje niezwykłą moc w ładnym opakowaniu. Tą ciężarówką zostaniesz panem europejskich tras.",
        condition: "Nowy",
        details: {
            priceFormat:"USD",
            distanceFormat:"mil",
            maxVFormat:"MPH",
            horsepowerFormat:"KM",
            price: "160 000",
            distance: "0",
            engine: "PACCAR MX-13",
            horsepower: "510",
            maxV:"90"

        },
        type: "c"

    }


];

Meteor.startup( () => {
    Cars.remove({});
    cars.forEach(car => Cars.insert(car));
});


