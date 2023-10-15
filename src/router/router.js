/**
 * Created by Ryan Balieiro on 08.23.2023
 * Main router.
 */
import { useData } from "../composables/data.js"
import RouterView from "../vue/core/RouterView.vue"
import { createRouter, createWebHistory } from "vue-router"
import GallerySection from "../vue/sections/gallery/GallerySection.vue"
import Pms from "../vue/sections/pagegallery/Pms.vue"
import Digitalart from "../vue/sections/pagegallery/Digitalart.vue"
export function createAppRouter() {
    const data = useData()
    const sections = data.getSections()
    const homeSection = sections[0] || { id: 'home' }

    /** Create Home **/
    const routeList = [{
        path: '/',
        name: homeSection['id'],
        component: RouterView
     }
    //        , 
   //   {
   //      path: "/pms",
   //      name: "Pms",
   //      component: Pms
   //  }, 
   //  {
   //     path: "/digitalart",
   //     name: "Digitalart",
   //     component: Digitalart
   // }
]

    /** Create Section Routes **/
    for (let i = 1; i < sections.length; i++) {
        let sectionId = sections[i].id

        routeList.push({
            path: '/' + sectionId,
            name: sectionId,
            component: RouterView
        })
    }

    /** Wildcard Route **/
    routeList.push({
        path: "/:pathMatch(.*)*",
        redirect: '/'
    })

    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: routeList
    })
}

