import Home from '@/pages/Home'
import Person from '@/pages/Person'
import Message from '@/pages/Message'
import ReLo from '@/pages/ReLo'
import Detail from '@/pages/Detail'

export default [
    //重定向
    {
        path: "*",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/person",
        component: Person,
    },
    {
        path: "/message",
        component: Message,
    },
    {
        path: "/ReLo",
        component: ReLo,
    },
    {
        path: "/detail/:pid",
        component: Detail,
    }
]