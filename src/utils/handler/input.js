export const usernameHandler = (value, errState) => {
  if (value.length < 1) {
    errState(prevState => ({
      ...prevState,
      username: "Masukkan username terlebih dahulu"
    }))
  } else if (value.match(/[^a-zA-Z0-9]/g)) {
    errState(prevState => ({
      ...prevState,
      username: "Username Tidak Boleh Mengandung Karakter Spesial"
    }))
  } else {
    errState(prevState => ({
      ...prevState,
      username: ""
    }))
  }
}

export const emailHandler = (value, errState) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errState(prevState => ({
      ...prevState,
      email: "Masukkan Email Anda!"
    }))
  } else {
    errState(prevState => ({
      ...prevState,
      email: ""
    }))
  }
}

export const passwordHandler = (value, errState) => {
  const isValidPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(value);

  if (value.length < 8 || !isValidPassword) {
    errState(prevState => ({
      ...prevState,
      password: "Password Harus Terdiri dari Minimal 8 Karakter dengan Kombinasi Huruf, Angka, dan Tanda Baca"
    }))
  } else {
    errState(prevState => ({
      ...prevState,
      password: ""
    }))
  }
}

export const confirmPasswordHandler = (value, errState, password) => {
  if (value !== password) {
    errState(prevState => ({
      ...prevState,
      confirmPassword: "Kata Sandi Tidak Sesuai"
    }))
  } else {
    errState(prevState => ({
      ...prevState,
      confirmPassword: ""
    }))
  }
}

export const usernameChecker = (value) => {
  if (value.match(/[^a-zA-Z0-9]/g)) {
    return false
  } else {
    return true
  }
}

export const emailChecker = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return false
  } else {
    return true
  }
}

export const passwordChecker = (value) => {
  if (value.length < 8) {
    return false
  } else {
    return true
  }
}