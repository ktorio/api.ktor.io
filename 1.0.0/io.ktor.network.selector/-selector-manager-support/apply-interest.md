---
title: SelectorManagerSupport.applyInterest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="index.html">SelectorManagerSupport</a> / <a href="./apply-interest.html">applyInterest</a></div>

# applyInterest

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">fun </span><span class="identifier">applyInterest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$applyInterest(java.nio.channels.Selector, io.ktor.network.selector.Selectable)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/Selector.html"><span class="identifier">Selector</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$applyInterest(java.nio.channels.Selector, io.ktor.network.selector.Selectable)/s">s</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Applies selectable's current interest (should be invoked in selection thread)

