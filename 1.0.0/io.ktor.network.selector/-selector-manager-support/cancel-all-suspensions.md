---
title: SelectorManagerSupport.cancelAllSuspensions - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="index.html">SelectorManagerSupport</a> / <a href="./cancel-all-suspensions.html">cancelAllSuspensions</a></div>

# cancelAllSuspensions

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">fun </span><span class="identifier">cancelAllSuspensions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(io.ktor.network.selector.Selectable, kotlin.Throwable)/attachment">attachment</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(io.ktor.network.selector.Selectable, kotlin.Throwable)/t">t</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Cancel all selectable's suspensions with the specified exception

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">fun </span><span class="identifier">cancelAllSuspensions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(java.nio.channels.Selector, kotlin.Throwable)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/Selector.html"><span class="identifier">Selector</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(java.nio.channels.Selector, kotlin.Throwable)/t">t</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Cancel all suspensions with the specified exception, reset all interests

</div>
