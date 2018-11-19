---
title: AuthenticationContext.challenge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">AuthenticationContext</a> / <a href="./challenge.html">challenge</a></div>

# challenge

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">val </span><span class="identifier">challenge</span><span class="symbol">: </span><a href="../-authentication-procedure-challenge/index.html"><span class="identifier">AuthenticationProcedureChallenge</span></a></code></div>

Gets an <a href="../-authentication-procedure-challenge/index.html">AuthenticationProcedureChallenge</a> for this context

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">challenge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="../-authentication-failed-cause/index.html"><span class="identifier">AuthenticationFailedCause</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationContext$challenge(kotlin.Any, io.ktor.auth.AuthenticationFailedCause, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.auth.AuthenticationProcedureChallenge, io.ktor.application.ApplicationCall)), , kotlin.Unit)))/function">function</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="../-authentication-procedure-challenge/index.html"><span class="identifier">AuthenticationProcedureChallenge</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Requests a challenge to be sent to the client if none of mechanisms can authenticate a user

</div>
