---
title: SessionAuthChallenge.Redirect - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">SessionAuthChallenge</a> / <a href="./index.html">Redirect</a></div>

# Redirect

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Redirect</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Redirect to an URL provided by the given function.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Redirect</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.SessionAuthChallenge.Redirect$<init>(kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.SessionAuthChallenge.Redirect.T, kotlin.String)))/url">url</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Redirect to an URL provided by the given function.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is a function receiving <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> and <a href="../../-user-password-credential/index.html">UserPasswordCredential</a> and returning an URL to redirect to.


</td>
</tr>
</tbody>
</table>
