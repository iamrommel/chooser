import { useLocation } from 'react-router-dom'

export const useUriQuery = () => {
    return new URLSearchParams(useLocation().search)
}
