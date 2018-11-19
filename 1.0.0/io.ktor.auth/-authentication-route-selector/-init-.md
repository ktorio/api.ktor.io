---
title: AuthenticationRouteSelector.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">AuthenticationRouteSelector</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">AuthenticationRouteSelector</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationRouteSelector$<init>(kotlin.collections.List((kotlin.String)))/names">names</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

An authentication route node that is used by <a href="../-authentication/index.html">Authentication</a> feature
and usually created by <a href="../authenticate.html">Route.authenticate</a> DSL function so generally there is no need to instantiate it directly
unless you are writing an extension

### Parameters

<code>names</code> - of authentication providers to be applied to this route