<template>
    <div class="w-full">
        <ul class="list-reset w-full">
            <li v-for="(item, index) in items" :key="index"
                class="cursor-pointer p-4 w-full border-2 border-grey-lighter rounded mb-2 flex justify-between"
                :class="{'bg-grey-dark text-white': selected.includes(item)}"
                @click="toggle(item)">
                <div>
                    {{item}}
                </div>
                <div v-show="selected.includes(item)">
                    <span v-if="multiple && numberedSelect" class="px-3 py-1 rounded-full bg-grey-darkest">
                            {{selected.indexOf(item) + 1}}
                    </span>
                    <span v-else>
                        <i class="fa fa-check text-black"></i>
                    </span>
                </div>
            </li>
        </ul>
        {{selected}}
    </div>
</template>

<script>
    export default {
        name: "list-simple",
        props: {
            items: {
                type: Array,
                default: [],
                required: true,
            },
            preSelected: {
                type: Array,
                default: [],
            },
            multiple: {
                type: Boolean,
                default: false
            },
            numberedSelect: {
                type: Boolean,
                default: true
            }
        },
        beforeMount() {
            if (this.preSelected.length && this.preSelected[0] !== null) {
                this.selected = this.preSelected
            }
        },
        data() {
            return {
                selected: [],
            }
        },
        methods: {
            toggle: function (item) {
                let index = this.selected.indexOf(item);
                if (this.multiple) {
                    if (index >= 0 && index === this.selected.length - 1) {
                        this.removeItem(item,index);
                    } else if (index < 0) {
                        this.addItem(item);
                    }
                }
                else {
                    if (index < 0) {
                        this.selected = [item];
                        this.$emit('select',item)
                    }
                }
                this.$emit('update', this.selected);
            },
            addItem(item){
                this.selected.push(item)
                this.$emit('select', item)
            },
            removeItem(item,index){
                this.selected.splice(index,1)
                this.$emit('deselect', item)
            }
        }
    }
</script>