import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, type Ref } from 'vue'

interface UserLoginState {
  username: Ref<string>
  password: Ref<string>
  token: Ref<string>
  isLoggedIn: Ref<boolean>
}

export const userLoginStore = defineStore('userLogin', {
  state: (): UserLoginState => ({
    username: ref(''),
    password: ref(''),
    token: ref(''),
    isLoggedIn: ref(false)
  }),
  actions: {
    login(): Promise<void> {
      return new Promise((resolve, reject) => {
        if (this.$state.username.length >= 1 || this.$state.password.length >= 1) {
          return false
        } else {
          axios
            .post(
              'http://127.0.0.1:3000/api/login',
              {
                username: this.$state.username,
                password: this.$state.password
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Cors: '*',
                  'Access-Control-Allow-Origin': '*'
                }
              }
            )
            .then((res) => {
              this.$state.token = res.data.token
              this.$state.isLoggedIn = true
              resolve()
            })
            .catch((err) => {
              console.log(err)
              reject()
            })
        }
      })
    },
    logout(): void {
      this.$state.token = ''
      this.$state.isLoggedIn = false
      this.$state.username = ''
      this.$state.password = ''
    },
    validateToken(token: string): boolean {
      return token ? true : false
    }
  }
})
