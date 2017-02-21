window.onload = function(){
  new Vue({
    el: "#app",
    data: {
      message: "Hello World!",
      yourHealth: 100,
      monsterHealth: 100,
      attackLog: {
        yourAttacks: [],
        monsterAttacks: [],
      }
    },
    methods: {
      attack: function(aiAttack, playerAttack){
        aiAttack = Math.floor((Math.random() * 8) + 3);
        playerAttack = Math.floor((Math.random() * 10) + 5);
        this.yourHealth = this.yourHealth - aiAttack;
        this.monsterHealth = this.monsterHealth - playerAttack;
        this.yourAttacks.push(playerAttack);
        this.monsterAttacks.push(aiAttack);
      },
      specialAttack: function(aiAttack, playerAttack){
        aiAttack = Math.floor((Math.random() * 15) + 8);
        playerAttack = Math.floor((Math.random() * 20) + 10);
        this.yourHealth = this.yourHealth - aiAttack;
        this.monsterHealth = this.monsterHealth - playerAttack;
      },
      heal: function(aiAttack, playerHeal){
        aiAttack = Math.floor((Math.random() * 8) + 3);
        playerHeal = Math.floor((Math.random() * 6) + 2);
        this.yourHealth = this.yourHealth + playerHeal;
        this.yourHealth = this.yourHealth - aiAttack;
      },
      reset: function(){
        this.yourHealth = 100;
        this.monsterHealth = 100;
        yourAttacks = [];
        monsterAttacks = [];
      }
    }
  })
};