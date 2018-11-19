---
title: SessionAuthenticationProvider.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">SessionAuthenticationProvider</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Session auth configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.SessionAuthenticationProvider.Configuration$<init>(kotlin.String, kotlin.reflect.KClass((io.ktor.auth.SessionAuthenticationProvider.Configuration.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.SessionAuthenticationProvider.Configuration$<init>(kotlin.String, kotlin.reflect.KClass((io.ktor.auth.SessionAuthenticationProvider.Configuration.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Session auth configuration


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="challenge.html">challenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">challenge</span><span class="symbol">: </span><a href="../../-session-auth-challenge/index.html"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

A response to send back if authentication failed


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="validate.html">validate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.SessionAuthenticationProvider.Configuration$validate(kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.SessionAuthenticationProvider.Configuration.T, io.ktor.auth.Principal)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a validation function that will check given <a href="index.html#T">T</a> session instance and return <a href="../../-principal.html">Principal</a>,
or null if the session does not correspond to an authenticated principal


</td>
</tr>
</tbody>
</table>
