---
title: AuthenticationContext - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">AuthenticationContext</a></div>

# AuthenticationContext

<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationContext</span></code></div>

Represents an authentication context for the call

### Parameters

<code>call</code> - instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> this context is for

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AuthenticationContext</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationContext$<init>(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span></code></div>

Represents an authentication context for the call


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> this context is for


</td>
</tr>
<tr>
<td markdown="1">

<a href="challenge.html">challenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">challenge</span><span class="symbol">: </span><a href="../-authentication-procedure-challenge/index.html"><span class="identifier">AuthenticationProcedureChallenge</span></a></code></div>

Gets an <a href="../-authentication-procedure-challenge/index.html">AuthenticationProcedureChallenge</a> for this context


</td>
</tr>
<tr>
<td markdown="1">

<a href="errors.html">errors</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">errors</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/HashMap.html"><span class="identifier">HashMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../-authentication-failed-cause/index.html"><span class="identifier">AuthenticationFailedCause</span></a><span class="symbol">&gt;</span></code></div>

Stores authentication failures for keys provided by authentication mechanisms


</td>
</tr>
<tr>
<td markdown="1">

<a href="principal.html">principal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">principal</span><span class="symbol">: </span><a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span></code></div>

Retrieves authenticated principal, or returns null if no user was authenticated


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="challenge.html">challenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">challenge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="../-authentication-failed-cause/index.html"><span class="identifier">AuthenticationFailedCause</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/function">function</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="../-authentication-procedure-challenge/index.html"><span class="identifier">AuthenticationProcedureChallenge</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Requests a challenge to be sent to the client if none of mechanisms can authenticate a user


</td>
</tr>
<tr>
<td markdown="1">

<a href="error.html">error</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">error</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationContext$error(kotlin.Any, io.ktor.auth.AuthenticationFailedCause)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.AuthenticationContext$error(kotlin.Any, io.ktor.auth.AuthenticationFailedCause)/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="../-authentication-failed-cause/index.html"><span class="identifier">AuthenticationFailedCause</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends an error to the <a href="errors.html">errors</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="principal.html">principal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">principal</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationContext$principal(io.ktor.auth.Principal)/principal">principal</span><span class="symbol">:</span>&nbsp;<a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets an authenticated principal for this context.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <span class="identifier">principal</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="principal.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Retrieves a principal of type <a href="principal.html#T">T</a>, if any


</td>
</tr>
</tbody>
</table>
