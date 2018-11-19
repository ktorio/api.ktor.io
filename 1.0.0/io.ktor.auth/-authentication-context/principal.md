---
title: AuthenticationContext.principal - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">AuthenticationContext</a> / <a href="./principal.html">principal</a></div>

# principal

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">var </span><span class="identifier">principal</span><span class="symbol">: </span><a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span></code></div>

Retrieves authenticated principal, or returns null if no user was authenticated

**Getter**

Retrieves authenticated principal, or returns null if no user was authenticated

**Setter**

Retrieves authenticated principal, or returns null if no user was authenticated

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">principal</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationContext$principal(io.ktor.auth.Principal)/principal">principal</span><span class="symbol">:</span>&nbsp;<a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets an authenticated principal for this context.

This method may be called only once per context

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <span class="identifier">principal</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="principal.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Retrieves a principal of type <a href="principal.html#T">T</a>, if any

</div>
