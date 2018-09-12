<template>
    <div style="padding: 50px;">
        <div class="xxx">
            <h2>State</h2>
            <h3>{{active}}</h3>
            <h3>{{count}}</h3>
        </div>

        <div class="xxx">
            <h2>Getter</h2>
            <h3>{{item1}}</h3>
            <h3>{{item2}}</h3>
            <h3>{{todos}}</h3>
            <h3>{{item3}}</h3>
            <button @click="getState">获取状态</button>
        </div>

        <div class="xxx">
        	<h2>Mutation</h2>
            <button @click="changeActive">修改状态</button>
            <button @click="increment">计数</button>
        </div>
        
        <div class="xxx">
        	<h2>Action</h2>
        	待续...
        </div>
        
        <div class="xxx">
        	<h2>Module</h2>
        	待续...
        </div>
        
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                item1: [],
                item2: []
            }
        },
        computed: {
            // 扩展运算符
            ...mapState({
                active: state => state.active,
                count: state => state.count
            }),
            // 相当于
            //          active(){
            //          	return this.$store.state.active;
            //          },
            //          count(){
            //          	return this.$store.state.count;
            //          },

            //获取状态数组形式
            ...mapGetters([
                'todos'
            ]),
            //获取状态重命名形式
            ...mapGetters({
                item3: 'todos'
            })

        },
        methods: {
            // 获取状态
            getState() {
                // 通过属性访问$store.getters.doneTodos
                this.item1 = this.$store.getters.doneTodos;

                // 通过方法访问
                this.item2 = this.$store.getters.getTodoById(2);
            },
            // 提交
            changeActive() {
            	// 修改状态
                this.$store.commit('changeActive');
            },
            // 提交 使用 mapMutations
            ...mapMutations({
            	increment: 'increment'
            })
        }
    }
</script>

<style>
    .xxx {
        padding: 10px;
        border: 3px solid #f3c7c7;
        margin-bottom: 30px;
    }
    
    .xxx h2 {
        background-color: #f3f3f3;
    }
</style>