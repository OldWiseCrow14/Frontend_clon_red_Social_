import {create} from 'zustand'

const useLoginStore = create((set, get)=>({
    handleSignup: async ({username,password,confirmPassword,email,name})=>{
        try {
            const petition = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username,password,confirmPassword,email,name})
            })
            const response = await petition.json()
            console.log(response)
        } catch (error) {
            throw error
        }
    }
}))






export default useLoginStore
