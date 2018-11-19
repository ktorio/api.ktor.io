---
title: SelectorManager - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="./index.html">SelectorManager</a></div>

# SelectorManager

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SelectorManager</span></code></div>

Selector manager is a service that manages NIO selectors and selection threads

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="provider.html">provider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">provider</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/spi/SelectorProvider.html"><span class="identifier">SelectorProvider</span></a></code></div>

NIO selector provider


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="notify-closed.html">notifyClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">notifyClosed</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.selector.SelectorManager$notifyClosed(io.ktor.network.selector.Selectable)/s">s</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Notifies the selector that selectable has been closed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="select.html">select</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">select</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManager$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManager$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Suspends until <a href="select.html#io.ktor.network.selector.SelectorManager$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</a> is selected for <a href="select.html#io.ktor.network.selector.SelectorManager$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</a>
May cause manager to allocate and run selector instance if not yet created.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default-selector-manager.html">DefaultSelectorManager</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">DefaultSelectorManager</span></s><span class="symbol">: </span><a href="../-actor-selector-manager/index.html"><span class="identifier">ActorSelectorManager</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../build-or-close.html">buildOrClose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">C</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">R</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">SelectorManager</span></a><span class="symbol">.</span><span class="identifier">buildOrClose</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/create">create</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/spi/SelectorProvider.html"><span class="identifier">SelectorProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/setup">setup</span><span class="symbol">:</span>&nbsp;<a href="../build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../build-or-close.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../build-or-close.html#R"><span class="identifier">R</span></a></code></div>

Creates a NIO entity via <a href="../build-or-close.html#io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/create">create</a> and calls <a href="../build-or-close.html#io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/setup">setup</a> on it. If any exception happens then the entity will be closed
and an exception will be propagated.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-selector-manager-support/index.html">SelectorManagerSupport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">SelectorManagerSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SelectorManager</span></a></code></div>

Base class for NIO selector managers


</td>
</tr>
</tbody>
</table>
