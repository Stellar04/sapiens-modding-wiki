import{_ as e,c as a,o as t,a as s}from"./app.60e89118.js";const m=JSON.parse('{"title":"Saving state","description":"","frontmatter":{},"headers":[{"level":2,"title":"Step by Step","slug":"step-by-step"},{"level":2,"title":"Explanation","slug":"explanation"}],"relativePath":"docs/game-saves.md","lastUpdated":1656281117000}'),o={name:"docs/game-saves.md"},i=s('<h1 id="saving-state" tabindex="-1">Saving state <a class="header-anchor" href="#saving-state" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend you use Hammerstone for managing state. You can find the Hammerstone docs <a href="./../hammerstone/save-state.html">here</a></p></div><h2 id="step-by-step" tabindex="-1">Step by Step <a class="header-anchor" href="#step-by-step" aria-hidden="true">#</a></h2><p>Get bridge from <code>world.lua</code> <code>world:setBridge</code></p><p>Then you can use <code>clientWorldSettingsDatabase = bridge.clientWorldSettingsDatabase</code></p><p>Now methods are:</p><ul><li>clientWorldSettingsDatabase:dataForKey(&quot;hasCheckedForTutorialSkip&quot;)</li><li>clientWorldSettingsDatabase:setDataForKey(true, &quot;hasCheckedForTutorialSkip&quot;)</li></ul><h2 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-hidden="true">#</a></h2><p>In sapiens, there are a few different databases, which allow you to store different things.</p>',9),r=[i];function n(d,l,c,p,h,u){return t(),a("div",null,r)}var g=e(o,[["render",n]]);export{m as __pageData,g as default};