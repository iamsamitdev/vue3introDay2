const app = Vue.createApp({

  // เรียกใช้ฟังก์ชัน data สำหรับเก็บตัวแปร
  data() {
    return {
      product: 'iPhone 12',
      brand: 'Apple',
      image: './assets/images/iphone-12-red.png',
      description: 'New Apple A14 Bionic hight perfomance',
      url: 'https://www.apple.com',
      inStock: true,
      inventory: 20,
      details: ['64GB', '128GB', '256GB'],
      variants: [
        {id: 239, color: 'Red', image: './assets/images/iphone-12-red.png'},
        {id: 240, color: 'Purple', image: './assets/images/iphone-12-purple.png'},
        {id: 250, color: 'White', image: './assets/images/iphone-12-white.png'},
      ],
      cart: 0
    }
  },

  // เรียกใช้ methods สำหรับสร้างฟังก์ชันต่างๆ เก็บไว้ใช้งาน
  methods: {
    // สร้างฟังก์ชัน addToCart
    addToCart() {
      // alert('OK')
      this.cart += 1
      this.inventory -= 1
    },
    // สร้างฟังก์ชันสำหรับแสดงรูป
    updateImage(variantImage){
      this.image = variantImage;
    }
  },

  // เรียกใช้ computed
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }

}).mount('#app')
