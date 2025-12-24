<template>
  <div id="svg-tree" style="width: 100%; height: 600px;"></div>
</template>

<script setup>
import { onMounted } from "vue";
import ApexTree from "apextree";


import flowData from "@/data/maintenance/organisation_chart.js";



onMounted(() => {
  const treeContainer = document.getElementById("svg-tree");
  if (!treeContainer) {
    console.error("SVG tree container not found!");
    return;
  }

  const options = {
    contentKey: "data",
    width: 1100,
    nodeWidth: 260,
    nodeHeight: 77,
    childrenSpacing: 100,
    siblingSpacing: 30,
    direction: "top",

    nodeTemplate: (content) => `
      <div style="
        border: 1px solid #000;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: ${content.color ? content.color + " !important" : "#ffffff !important"};
        
        font-family: Arial;
      ">

        <div style="flex: 1; padding: 5px;">
          <div style="font-weight: bold; text-align:center; color: black; font-size: 16px;">
            ${content.label}
          </div>
          <div style="color: red; text-align:center; font-size: 16px;">
            ${content.value}
          </div>
        </div>

        <div style="
          width: 40px;
          border-left: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        ">
          ${content.number}
        </div>

      </div>
    `,

    canvasStyle: "border: 1px solid black; background: #fff;",
    enableToolbar: true,


    
  };

  const tree = new ApexTree(treeContainer, options);
  tree.render(flowData);
});
</script>

   








