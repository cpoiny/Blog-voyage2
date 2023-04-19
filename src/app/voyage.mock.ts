export interface IVoyage {
    id: number,
    pays: string,
    ville: string,
    dateDepart: string,
    dateRetour: string,
    img : string,
    galerie : IGalerie[],
    description: string,
    points_positifs: string[],
    points_negatifs: string[],
    conseils: string[],
    resume: string,
    isActive: true | false
}

export interface IGalerie {
    titre : string,
    img : string
}


export const VOYAGES : IVoyage[] = [
    {
        id: 1,
        pays: "Albanie",
        ville: "Tirana",
        dateDepart : "12.12.2022",
        dateRetour : "18.12.2022",
        img : "assets/img/Albanie.png",
        galerie : [{
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        },
        {
            titre : "Albanie",
            img :"assets/img/Albanie.png"
        } ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        points_positifs:["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        points_negatifs: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"],
        conseils: ["Prenez une paire de tong !"],
        resume: "L’Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l’Albanie.",
        isActive: true
    },
    {
        id: 2,
        pays: "Grece",
        ville: "Athènes",
        dateDepart : "11.10.2022",
        dateRetour : "18.10.2022",
        img : "assets/img/Grece.png",
        galerie : [{
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        } ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        points_positifs:["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        points_negatifs: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"],
        conseils: ["Prenez une paire de tong !"],
        resume: "La grèce est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Grecs, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Grèce.",
        isActive: false
    },
    {
        id: 3,
        pays: "Guatemala",
        ville: "Monterrico",
        dateDepart : "14.11.2022",
        dateRetour : "20.11.2022",
        img : "assets/img/Guatemala.png",
        galerie : [{
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        },
        {
            titre : "Guatemala",
            img :"assets/img/Guatemala.png"
        } ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        points_positifs:["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        points_negatifs: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"],
        conseils: ["Prenez une paire de tong !"],
        resume: "Le Guatemala est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des Guatemaltais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme du Guatemala.",
        isActive: false
    },
    {
        id: 4,
        pays: "Tunisie",
        ville: "Tunis",
        dateDepart : "05.03.2022",
        dateRetour : "24.03.2022",
        img : "assets/img/Tunisie.png",
        galerie : [{
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        },
        {
            titre : "Tunisie",
            img :"assets/img/Tunisie.png"
        } ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        points_positifs:["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        points_negatifs: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"],
        conseils: ["Prenez une paire de tong !"],
        resume: "La Tunisie est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des tunisiens, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Tunisie.",
        isActive: false
    },
    {
        id: 5,
        pays: "Tunisie",
        ville: "El Jam",
        dateDepart : "12.12.2021",
        dateRetour : "18.12.2022",
        img : "assets/img/Tunisie-2.png",
        galerie : [{
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Tunisie-2",
            img :"assets/img/Tunisie-2.png"
        },
        {
            titre : "Grece",
            img :"assets/img/Grece.png"
        } ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare. Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi. Integer nibh urna, posuere euismod dolor ac Donec commodo pellentesque sapien eu interdum. Vestibulum neque nulla, mattis eget hendrerit nec, tempus pharetra est. Nulla facilisi. Curabitur elit lorem, rhoncus quis quam et, imperdiet euismod mi. Morbi eget elit ac velit porttitor sodales. Nulla scelerisque risus ex, a faucibus est eleifend sed. Aliquam ac facilisis lorem, ut ornare velit.dignissim metus. Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.",
        points_positifs:["Un pays très simple à sillonner, sans embrouilles ni complexité", "Des habitants gentils, spontanés et qui cherchent le contact", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques"],
        points_negatifs: ["Le climat torride en juillet-août, sauf en montagne","La côte très fréquentée l’été et de plus en plus bétonnée"],
        conseils: ["Prenez une paire de tong !"],
        resume: "La Tunisie-2 est un pays que nous avons adoré visiter, en grande partie grâce à l’accueil chaleureux des tunisiens-2, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de la Tunisie-2.",
        isActive: false
    }
]