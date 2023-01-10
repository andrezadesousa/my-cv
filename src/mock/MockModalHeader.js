import {HouseLine, AddressBook, BookOpen, Newspaper, Briefcase, ArrowSquareOut} from 'phosphor-react'

export const NavLinks = [
    {
        id: 1,
        classNav: 'nav__link active-link',
        ref: '#home',
        text: 'Home',
        icon: <HouseLine></HouseLine>
    },
    {
        id: 2,
        classNav: 'nav__link',
        ref: '#profile',
        text: 'Perfil',
        icon: <AddressBook />
    },
    {
        id: 3,
        classNav: 'nav__link',
        ref: '#education',
        text: 'Educação',
        icon: <BookOpen />
    },
    {
        id: 4,
        classNav: 'nav__link',
        ref: '#skills',
        text: 'Skills',
        icon: <Newspaper />
    },
    {
        id: 5,
        classNav: 'nav__link',
        ref: '#experience',
        text: 'Experiências',
        icon: <Briefcase />
    },
    {
        id: 6,
        classNav: 'nav__link',
        ref: '#references',
        text: 'Referências',
        icon: <ArrowSquareOut />
    }
] 