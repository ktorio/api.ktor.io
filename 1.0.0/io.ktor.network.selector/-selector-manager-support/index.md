---
title: SelectorManagerSupport - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="./index.html">SelectorManagerSupport</a></div>

# SelectorManagerSupport

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">SelectorManagerSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-selector-manager/index.html"><span class="identifier">SelectorManager</span></a></code></div>

Base class for NIO selector managers

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-closed-selector-cancellation-exception/index.html">ClosedSelectorCancellationException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ClosedSelectorCancellationException</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CancellationException</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cancelled.html">cancelled</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">cancelled</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Number of cancelled keys


</td>
</tr>
<tr>
<td markdown="1">

<a href="pending.html">pending</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">pending</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Number of pending selectables


</td>
</tr>
<tr>
<td markdown="1">

<a href="provider.html">provider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">provider</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/spi/SelectorProvider.html"><span class="identifier">SelectorProvider</span></a></code></div>

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

<a href="apply-interest.html">applyInterest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">applyInterest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$applyInterest(java.nio.channels.Selector, io.ktor.network.selector.Selectable)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/Selector.html"><span class="identifier">Selector</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$applyInterest(java.nio.channels.Selector, io.ktor.network.selector.Selectable)/s">s</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Applies selectable's current interest (should be invoked in selection thread)


</td>
</tr>
<tr>
<td markdown="1">

<a href="cancel-all-suspensions.html">cancelAllSuspensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">cancelAllSuspensions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(io.ktor.network.selector.Selectable, kotlin.Throwable)/attachment">attachment</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(io.ktor.network.selector.Selectable, kotlin.Throwable)/t">t</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Cancel all selectable's suspensions with the specified exception

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">cancelAllSuspensions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(java.nio.channels.Selector, kotlin.Throwable)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/Selector.html"><span class="identifier">Selector</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$cancelAllSuspensions(java.nio.channels.Selector, kotlin.Throwable)/t">t</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Cancel all suspensions with the specified exception, reset all interests


</td>
</tr>
<tr>
<td markdown="1">

<a href="handle-selected-key.html">handleSelectedKey</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">handleSelectedKey</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$handleSelectedKey(java.nio.channels.SelectionKey)/key">key</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/SelectionKey.html"><span class="identifier">SelectionKey</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Handles particular selected key


</td>
</tr>
<tr>
<td markdown="1">

<a href="handle-selected-keys.html">handleSelectedKeys</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">handleSelectedKeys</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$handleSelectedKeys(kotlin.collections.MutableSet((java.nio.channels.SelectionKey)), kotlin.collections.Set((java.nio.channels.SelectionKey)))/selectedKeys">selectedKeys</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html"><span class="identifier">MutableSet</span></a><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/SelectionKey.html"><span class="identifier">SelectionKey</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$handleSelectedKeys(kotlin.collections.MutableSet((java.nio.channels.SelectionKey)), kotlin.collections.Set((java.nio.channels.SelectionKey)))/keys">keys</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html"><span class="identifier">Set</span></a><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/SelectionKey.html"><span class="identifier">SelectionKey</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Handle selected keys clearing <a href="handle-selected-keys.html#io.ktor.network.selector.SelectorManagerSupport$handleSelectedKeys(kotlin.collections.MutableSet((java.nio.channels.SelectionKey)), kotlin.collections.Set((java.nio.channels.SelectionKey)))/selectedKeys">selectedKeys</a> set


</td>
</tr>
<tr>
<td markdown="1">

<a href="notify-closed-impl.html">notifyClosedImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">notifyClosedImpl</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$notifyClosedImpl(java.nio.channels.Selector, java.nio.channels.SelectionKey, io.ktor.network.selector.Selectable)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/Selector.html"><span class="identifier">Selector</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$notifyClosedImpl(java.nio.channels.Selector, java.nio.channels.SelectionKey, io.ktor.network.selector.Selectable)/key">key</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/SelectionKey.html"><span class="identifier">SelectionKey</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$notifyClosedImpl(java.nio.channels.Selector, java.nio.channels.SelectionKey, io.ktor.network.selector.Selectable)/attachment">attachment</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Notify selectable's closure


</td>
</tr>
<tr>
<td markdown="1">

<a href="publish-interest.html">publishInterest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">publishInterest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$publishInterest(io.ktor.network.selector.Selectable)/selectable">selectable</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Publish current <a href="publish-interest.html#io.ktor.network.selector.SelectorManagerSupport$publishInterest(io.ktor.network.selector.Selectable)/selectable">selectable</a> interest, any thread


</td>
</tr>
<tr>
<td markdown="1">

<a href="select.html">select</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">select</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Suspends until <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/interest">interest</a> is selected for <a href="select.html#io.ktor.network.selector.SelectorManagerSupport$select(io.ktor.network.selector.Selectable, io.ktor.network.selector.SelectInterest)/selectable">selectable</a>
May cause manager to allocate and run selector instance if not yet created.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-selector-manager/notify-closed.html">notifyClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">notifyClosed</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.selector.SelectorManager$notifyClosed(io.ktor.network.selector.Selectable)/s">s</span><span class="symbol">:</span>&nbsp;<a href="../-selectable/index.html"><span class="identifier">Selectable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Notifies the selector that selectable has been closed.


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
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">C</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">R</span><span class="symbol">&gt;</span> <a href="../-selector-manager/index.html"><span class="identifier">SelectorManager</span></a><span class="symbol">.</span><span class="identifier">buildOrClose</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/create">create</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/spi/SelectorProvider.html"><span class="identifier">SelectorProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/setup">setup</span><span class="symbol">:</span>&nbsp;<a href="../build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../build-or-close.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../build-or-close.html#R"><span class="identifier">R</span></a></code></div>

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

<a href="../-actor-selector-manager/index.html">ActorSelectorManager</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ActorSelectorManager</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">SelectorManagerSupport</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Default CIO selector manager implementation


</td>
</tr>
</tbody>
</table>
