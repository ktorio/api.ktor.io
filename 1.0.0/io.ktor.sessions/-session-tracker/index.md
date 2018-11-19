---
title: SessionTracker - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTracker</a></div>

# SessionTracker

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTracker</span></code></div>

SessionTracker provides ability to track and extract session from the call context.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTracker$clear(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session information


</td>
</tr>
<tr>
<td markdown="1">

<a href="load.html">load</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">load</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTracker$load(io.ktor.application.ApplicationCall, kotlin.String)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTracker$load(io.ktor.application.ApplicationCall, kotlin.String)/transport">transport</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Load session value from <a href="load.html#io.ktor.sessions.SessionTracker$load(io.ktor.application.ApplicationCall, kotlin.String)/transport">transport</a> string for the specified <a href="load.html#io.ktor.sessions.SessionTracker$load(io.ktor.application.ApplicationCall, kotlin.String)/call">call</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="store.html">store</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">store</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTracker$store(io.ktor.application.ApplicationCall, kotlin.Any)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTracker$store(io.ktor.application.ApplicationCall, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Store session <a href="store.html#io.ktor.sessions.SessionTracker$store(io.ktor.application.ApplicationCall, kotlin.Any)/value">value</a> and return respective transport string for the specified <a href="store.html#io.ktor.sessions.SessionTracker$store(io.ktor.application.ApplicationCall, kotlin.Any)/call">call</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="validate.html">validate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTracker$validate(kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Validate session information


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-session-tracker-by-id/index.html">SessionTrackerById</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTrackerById</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionTracker</span></a></code></div>

<a href="./index.md">SessionTracker</a> that transfers a Session Id generated by a <a href="../-session-tracker-by-id/session-id-provider.html">sessionIdProvider</a> in HTTP Headers/Cookies.
It uses a <a href="../-session-tracker-by-id/storage.html">storage</a> and a <a href="../-session-tracker-by-id/serializer.html">serializer</a> to store/load serialized/deserialized session content of a specific <a href="../-session-tracker-by-id/type.html">type</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-session-tracker-by-value/index.html">SessionTrackerByValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTrackerByValue</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionTracker</span></a></code></div>

<a href="./index.md">SessionTracker</a> that stores the contents of the session as part of HTTP Cookies/Headers.
It uses a specific <a href="../-session-tracker-by-value/serializer.html">serializer</a> to serialize and deserialize objects of type <a href="../-session-tracker-by-value/type.html">type</a>.


</td>
</tr>
</tbody>
</table>
