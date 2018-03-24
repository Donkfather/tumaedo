<template>
    <div class="w-full">
        <ul class="list-reset w-full">
            <li v-for="(item, index) in data" :key="index"
                class="cursor-pointer p-4 w-full border-2 border-grey-lighter rounded mb-2 flex justify-between"
                :class="{'bg-grey-dark text-white': has(item,selected)}"
                @click="toggle(item)">
                <div>
                    {{item.name}}
                </div>
                <div v-show="has(item,selected)">
                    <span v-if="multiple && numberedSelect" class="px-3 py-1 rounded-full bg-grey-darkest">
                            {{indexOf(item,selected) + 1}}
                    </span>
                    <span v-else>
                        <i class="fa fa-check text-black"></i>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list-simple",
        props: {
            data: {
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
        bedoreMount() {
            if (this.preSelected.length && this.preSelected[0] !== null) {
                this.selected.push(...this.preSelected)
            }
        },
        data() {
            return {
                selected: [],
            }
        },
        methods: {
            toggle(item) {
                let index = this.indexOf(item, this.selected);
                if (this.multiple) {
                    if (index >= 0 && index === this.selected.length - 1) {
                        this.selected.splice(index, 1)
                        this.$emit('deselect', this.selected)
                    } else {
                        this.selected.push(item)
                        this.$emit('select', this.selected)
                    }
                }
                else {
                    if (index < 0) {
                        this.selected = [item];
                    }
                }
                console.log(this.selected)
                this.$emit('update', this.selected);
            },
            has(needle, haystack) {
                if (haystack.length <= 0) return false;
                return haystack.find(item => item.id === needle.id) !== undefined
            },
            indexOf(needle, haystack) {
                if (haystack.length <= 0) return -1;
                let key = -1;
                haystack.forEach((item, index) => {
                    if (item.id === needle.id) {
                        key = index
                    }
                })
                return key;
            }
        }
    }
</script>

<style scoped>

</style>