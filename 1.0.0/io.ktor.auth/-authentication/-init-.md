---
title: Authentication.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">Authentication</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication$<init>(kotlin.collections.List((io.ktor.auth.AuthenticationProvider)))/providers">providers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

### Parameters

<code>providers</code> - list of registered instances of <a href="../-authentication-provider/index.html">AuthenticationProvider</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Authentication</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication$<init>(io.ktor.auth.Authentication.Configuration)/config">config</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">)</span></code></div>

Authentication feature supports pluggable mechanisms for checking and challenging a client to provide credentials

### Parameters

<code>config</code> - initial authentication configuration

</div>
