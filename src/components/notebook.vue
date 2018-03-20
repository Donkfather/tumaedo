<template>
    <div class="bg-mustard-lightest">
        <div class="">
            <div class="text-center py-4 mb-3">
                <h2 class="text-2xl uppercase font-boldest font-serif text-green-dark tracking-wide">Detective
                    Notes</h2>
            </div>
            <div class="text-center bg-green-dark p-3">
                <h2 class="text-xl uppercase text-bold text-mustard-lightest tracking-wide">Suspects</h2>
            </div>
            <div>
                <table class="w-full notebook">
                    <tr class="w-full text-left" v-for="player in players">
                        <th class="w-2/5 pl-3 p-2" v-text="player"></th>
                        <td class="text-center text-xl">
                            <div>
                                <div class="text-scarlet">
                                    &cross;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center text-xl">
                            <div>
                                <div class="text-green">
                                    &check;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center text-xl">
                            <div>
                                <div class="text-scarlet">
                                    &cross;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center text-xl">
                            <div>
                                <div class="text-green">
                                    &check;
                                </div>
                                <div class="flex text-xs w-full" style="font-size: 9px;">
                                    <div class="flex-1">1</div>
                                    <div class="flex-1">2</div>
                                    <div class="flex-1">3</div>
                                    <div class="flex-1">4</div>
                                    <div class="flex-1">5</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "notebook",
        data() {
            return {
                players: [
                    'Col. Mustard',
                    'Prof. Plum',
                    'Mr. Green',
                    'Mrs. Peacock',
                    'Miss Scarlet',
                    'Mrs. White',
                ]
            }
        }
    }
</script>
